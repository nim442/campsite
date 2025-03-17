import fs from 'fs'
import path, { resolve } from 'path'
import react from '@vitejs/plugin-react'
import fastGlob from 'fast-glob'
import { createServer, transformWithEsbuild } from 'vite'
import type { Plugin, ViteDevServer } from 'vite'
import DynamicPublicDirectory from 'vite-multiple-assets'
import commonjs from 'vite-plugin-commonjs'
import { createHtmlPlugin } from 'vite-plugin-html'
import Inspect from 'vite-plugin-inspect'
import { NgmiPolyfill } from 'vite-plugin-ngmi-polyfill'
import tsconfigPaths from 'vite-tsconfig-paths'

// Import our new auto-alias plugin
import { createAutoAliasPlugin } from './auto-alias-plugin'
// Import our new Node.js polyfills
import { createGlobalPolyfillsPlugin, createNodePolyfillsPlugin } from './node-polyfills'

// Component routes plugin to handle file changes
function componentRoutesPlugin(tempDirFullPath: string): Plugin {
  return {
    name: 'component-routes-plugin',
    configureServer(server: ViteDevServer) {
      const componentRoutesDir = path.join(tempDirFullPath, 'dessn-component-routes')

      function invalidateRoutes(filePath: string) {
        // Check if the file is in the component routes directory
        if (filePath.includes('dessn-component-routes')) {
          console.log(`[component-routes-plugin] File changed: ${filePath}`)

          // Invalidate the routes module
          server.moduleGraph.fileToModulesMap.forEach((mods) => {
            mods.forEach((mod) => {
              // Look for routes.ts file or any module that contains our marker
              if (
                mod.id?.includes('routes.ts') ||
                (mod.transformResult?.code && mod.transformResult.code.includes('COMPONENT_ROUTES_MARKER'))
              ) {
                console.log(`[component-routes-plugin] Invalidating module: ${mod.id}`)
                server.moduleGraph.invalidateModule(mod)

                // Also invalidate importers of the routes module
                mod.importers.forEach((imp) => {
                  server.moduleGraph.invalidateModule(imp)
                })
              }
            })
          })

          // Force a full reload
          server.ws.send({
            type: 'full-reload'
          })
        }
      }

      // Watch for file additions and deletions
      server.watcher.on('add', invalidateRoutes)
      server.watcher.on('unlink', invalidateRoutes)
      server.watcher.on('change', invalidateRoutes)
    },

    // Transform hook to handle the routes file
    transform(code: string, id: string) {
      // Only process the routes.ts file
      if (id.endsWith('routes.ts') && code.includes('COMPONENT_ROUTES_MARKER')) {
        console.log(`[component-routes-plugin] Processing routes file: ${id}`)
        return code
      }
      return null
    }
  }
}

export interface ViteWorkerConfig {
  vitePort: number
  tempDir: string
  basePath?: string
  codebasePath: string
}

export const DEFAULT_CONFIG: ViteWorkerConfig = {
  vitePort: 5173,
  tempDir: '.temp',
  codebasePath: process.cwd()
}

// Plugin to completely disable HMR and prevent page reloads
function createDisableHmrPlugin(): Plugin {
  return {
    name: 'disable-hmr-plugin',
    apply: 'serve', // Only apply in dev mode

    configureServer(server) {
      // Store the original WebSocket send method
      const originalSend = server.ws.send

      // Override the WebSocket send method to filter out HMR and full-reload messages
      server.ws.send = function (payload: any) {
        // Block both HMR updates and full-reload messages
        if (
          payload.type === 'full-reload' ||
          payload.type === 'update' ||
          payload.type === 'prune' ||
          payload.type === 'error'
        ) {
          // Log the blocked message for debugging
          console.log(`[HMR Disabled] Blocked message type: ${payload.type}`)
          return // Don't send the message
        }

        // Allow other types of messages to pass through
        originalSend.call(server.ws, payload)
      }
    },

    handleHotUpdate({ file }: { file: string }) {
      // Log file changes but don't trigger updates
      console.log(`[HMR Disabled] File changed: ${file}`)
      return [] // Return empty array to prevent HMR updates
    }
  }
}

// Process.env fake values plugin
export function processEnvFakeValuesPlugin() {
  return {
    name: 'process-env-fake-values',
    enforce: 'pre' as const,

    // Define environment variables at the Vite config level
    config(config) {
      // Collect all environment variables from process.env
      const envVars: Record<string, string> = {}

      // Copy actual environment variables
      if (typeof process.env === 'object' && process.env !== null) {
        Object.keys(process.env).forEach((key) => {
          const value = process.env[key as keyof typeof process.env]
          if (typeof value === 'string') {
            envVars[key] = value
          }
        })
      }

      // Ensure define exists in config
      config.define = config.define || {}

      // Set process.env as a complete object in the define option
      config.define['process.env'] = envVars

      console.log(`[process-env-fake-values] Defined ${Object.keys(envVars).length} environment variables`)

      return config
    },

    // Handle any remaining process.env references that weren't caught by the define
    transform(code: string, id: string) {
      if (id.includes('node_modules')) return null
      if (!code.includes('process.env')) return null

      try {
        // This regex captures the exact process.env.KEY pattern
        const regex = /\bprocess\.env\.([A-Za-z0-9_]+)\b/g

        // Also look for dynamic access patterns like process.env[varName]
        const dynamicAccessRegex = /\bprocess\.env\s*\[\s*(['"`])([^'"`]+)\1\s*\]/g

        // Check if there are any matches
        const matches = Array.from(code.matchAll(regex))
        const dynamicMatches = Array.from(code.matchAll(dynamicAccessRegex))

        if (matches.length === 0 && dynamicMatches.length === 0) return null

        // Create a list of environment variables to inject
        const envKeys = new Set<string>()
        matches.forEach((match) => {
          const envKey = match[1]
          envKeys.add(envKey)
        })

        dynamicMatches.forEach((match) => {
          const envKey = match[2]
          envKeys.add(envKey)
        })

        // If no environment variables found, return the original code
        if (envKeys.size === 0) return null

        // Create a preamble to inject at the top of the file
        let preamble = '// Injected environment variables\n'
        preamble += 'if (typeof process === "undefined" || !process.env) {\n'
        preamble += '  globalThis.process = globalThis.process || {};\n'
        preamble += '  globalThis.process.env = globalThis.process.env || {};\n'
        preamble += '}\n\n'

        // Add each environment variable
        for (const key of envKeys) {
          const value = JSON.stringify(`FAKE_${key}_VALUE`)

          preamble += `if (!("${key}" in process.env)) process.env.${key} = ${value};\n`
        }

        // Add a fallback handler for any dynamic access
        if (dynamicMatches.length > 0) {
          preamble += '\n// Add fallback handler for dynamic environment variable access\n'
          preamble += 'const originalGet = Object.getOwnPropertyDescriptor(Object.prototype, "__lookupGetter__") \n'
          preamble += '  ? undefined \n'
          preamble += '  : Object.getOwnPropertyDescriptor(process.env, "__proto__")?.get;\n\n'

          preamble += 'if (!originalGet) {\n'
          preamble += '  Object.defineProperty(process.env, "__proto__", {\n'
          preamble += '    get: function(prop) {\n'
          preamble += '      return this[prop] !== undefined ? this[prop] : `FAKE_${prop}_VALUE`;\n'
          preamble += '    },\n'
          preamble += '    configurable: true\n'
          preamble += '  });\n'
          preamble += '}\n'
        }

        // Add a more robust Proxy-based handler for computed property access
        preamble += '\n// Create a Proxy for process.env to handle computed property access\n'
        preamble += 'const originalEnv = process.env;\n'
        preamble += 'process.env = new Proxy(originalEnv, {\n'
        preamble += '  get: function(target, prop) {\n'
        preamble += '    if (prop in target) return target[prop];\n'
        preamble += '    if (typeof prop === "string") {\n'
        preamble += '      console.log(`[Runtime] Accessing undefined env var: ${String(prop)}`);\n'
        preamble += '      return `FAKE_${prop}_VALUE`;\n'
        preamble += '    }\n'
        preamble += '    return undefined;\n'
        preamble += '  },\n'
        preamble += '  set: function(target, prop, value) {\n'
        preamble += '    target[prop] = value;\n'
        preamble += '    return true;\n'
        preamble += '  }\n'
        preamble += '});\n'

        // Log what we're doing
        console.log(`[process-env-fake-values] Injecting ${envKeys.size} environment variables in ${id}`)
        if (dynamicMatches.length > 0) {
          console.log(`[process-env-fake-values] Adding support for dynamic environment variable access in ${id}`)
        }

        // Return the modified code with our preamble
        return preamble + '\n' + code
      } catch (error) {
        console.error('[process-env-fake-values] Error:', error)
        return null
      }
    }
  }
}

// Next.js stubs plugin
const nextJsStubsPlugin = (tempDirFullPath: string) => ({
  name: 'nextjs-stubs',
  resolveId(id: string) {
    if (id === 'next/image') return path.join(tempDirFullPath, 'next/image.tsx')
    if (id === 'next/link') return path.join(tempDirFullPath, 'next/link.tsx')
    if (id === 'next/router') return path.join(tempDirFullPath, 'next/router.tsx')
    if (id === 'next/navigation') return path.join(tempDirFullPath, 'next/navigation.tsx')
  },
  async transform(code: string) {
    return code
  }
})

// Create a plugin that directly injects the querystring implementation
function createDirectQuerystringPlugin() {
  // The querystring implementation to inject
  const querystringImplementation = `
    export function stringify(obj) {
      return Object.entries(obj)
        .map(([key, value]) => {
          if (value === undefined) return key;
          return \`\${encodeURIComponent(key)}=\${encodeURIComponent(value)}\`;
        })
        .join('&');
    }
    
    export function parse(str) {
      const params = new URLSearchParams(str);
      const result = {};
      for (const [key, value] of params.entries()) {
        result[key] = value;
      }
      return result;
    }
  `

  return {
    name: 'direct-querystring-plugin',
    enforce: 'pre' as const,

    // Transform imports of querystring
    transform(code: string, id: string) {
      // Skip node_modules
      if (id.includes('node_modules')) return null

      // Check if the file imports querystring
      if (code.includes('from "querystring"') || code.includes("from 'querystring'")) {
        console.log(`[direct-querystring-plugin] Transforming imports in ${id}`)

        // Replace the import with our implementation
        let newCode = code

        // Handle named imports: import { stringify } from 'querystring'
        newCode = newCode.replace(
          /import\s*{\s*([^}]+)\s*}\s*from\s*['"]querystring['"]/g,
          (match: string, imports: string) => {
            return `// Inline querystring implementation
${querystringImplementation}`
          }
        )

        // Handle default import: import querystring from 'querystring'
        newCode = newCode.replace(
          /import\s+(\w+)\s+from\s*['"]querystring['"]/g,
          (match: string, importName: string) => {
            return `// Inline querystring implementation
${querystringImplementation}
const ${importName} = { stringify, parse };`
          }
        )

        // If the code was changed, return it
        if (newCode !== code) {
          return newCode
        }
      }

      return null
    }
  }
}

// CSS Import Reorganize Plugin
// This plugin reorganizes CSS imports by moving them to the top of the file
function createCssImportReorganizePlugin(): Plugin {
  return {
    name: 'css-import-reorganize-plugin',
    enforce: 'pre' as const,

    transform(code: string, id: string) {
      // Only process CSS files
      if (!id.endsWith('.css')) return null

      // Check if the file has @import statements
      if (!code.includes('@import')) return null

      console.log(`[css-import-reorganize] Processing CSS file: ${id}`)

      try {
        // Extract all @import statements with their media queries and layer directives
        // This regex captures:
        // 1. The full @import statement
        // 2. Any layer directive before the import
        // 3. The URL or string inside the import
        // 4. Any media query that follows
        const importRegex =
          /(@layer\s+[^{;]+\s*)?(@import\s+(?:url\(\s*['"]?([^'")]+)['"]?\s*\)|['"]([^'"]+)['"]))\s*((?:[^;{}]|screen|print|all|only|and|not|\(|\)|\s)+)?;/g

        // Store imports with their details for sorting
        interface ImportStatement {
          fullText: string // The complete import statement
          layer: string // Layer directive (if present)
          url: string // The URL being imported
          mediaQuery: string // Any media query (if present)
          priority: number // Priority for sorting (lower = higher priority)
        }

        const imports: ImportStatement[] = []
        let match

        // Collect all import statements with their details
        while ((match = importRegex.exec(code)) !== null) {
          const fullImport = match[0]
          const layer = match[1] || ''
          const importStmt = match[2]
          const url = match[3] || match[4] // Either from url() or direct string
          const mediaQuery = match[5]?.trim() || ''

          // Determine priority based on CSS best practices:
          // 1. Reset/normalize CSS (typically contains 'reset' or 'normalize' in the name)
          // 2. Imports without media queries or layers
          // 3. Imports with layers
          // 4. Imports with media queries
          // 5. Imports with both layers and media queries
          let priority = 2 // Default priority (no media query, no layer)

          const urlLower = url?.toLowerCase() || ''
          if (urlLower.includes('reset') || urlLower.includes('normalize')) {
            priority = 1 // Reset/normalize CSS
          } else if (layer && mediaQuery) {
            priority = 5 // Both layer and media query
          } else if (layer) {
            priority = 3 // Layer only
          } else if (mediaQuery) {
            priority = 4 // Media query only
          }

          imports.push({
            fullText: fullImport,
            layer,
            url: url || '',
            mediaQuery,
            priority
          })

          console.log(`[css-import-reorganize] Found import: ${fullImport.trim()} (priority: ${priority})`)
        }

        if (imports.length === 0) {
          console.log(`[css-import-reorganize] No imports found in ${id}`)
          return null // No imports found
        }

        // Sort imports by priority
        imports.sort((a, b) => a.priority - b.priority)

        // Remove all import statements from the original code
        let cleanedCode = code
        imports.forEach((importStmt) => {
          cleanedCode = cleanedCode.replace(importStmt.fullText, '')
        })

        // Clean up any empty lines at the beginning and multiple consecutive empty lines
        cleanedCode = cleanedCode.replace(/^\s*\n+/g, '').replace(/\n{3,}/g, '\n\n')

        // Join all imports with newlines and add them at the top
        const reorganizedImports = imports.map((imp) => imp.fullText).join('\n')
        const reorganizedCode = reorganizedImports + '\n\n' + cleanedCode

        console.log(`[css-import-reorganize] Reorganized ${imports.length} imports in ${id}`)

        return reorganizedCode
      } catch (error) {
        console.error(`[css-import-reorganize] Error processing ${id}:`, error)
        return null
      }
    }
  }
}

const log = (...args: any[]) => {
  fs.writeFileSync(path.join(__dirname, 'tsconfig-paths.json'), JSON.stringify(args, null, 2))
}
// Function to find all tsconfig.json files in the project
function findAllTsConfigFiles(config: ViteWorkerConfig): string[] {
  try {
    // Calculate the root codebase path by removing basePath from codebasePath
    let rootCodebasePath = config.codebasePath

    if (config.basePath) {
      // If basePath is provided, calculate the root by going up from the current codebase path
      try {
        // Normalize paths to handle any path separators consistently
        const normalizedBasePath = path.normalize(config.basePath)

        const normalizedCodebasePath = path.normalize(config.codebasePath)

        // Calculate how many directories to go up based on basePath
        const pathSegments = normalizedBasePath.split(path.sep).filter(Boolean)
        const levelsUp = pathSegments.length

        // Go up that many levels from codebasePath
        rootCodebasePath = path.resolve(normalizedCodebasePath, ...Array(levelsUp).fill('..'))

        console.log(`[tsconfigPaths] Base path: ${normalizedBasePath}`)
        console.log(`[tsconfigPaths] Codebase path: ${normalizedCodebasePath}`)
        console.log(`[tsconfigPaths] Going up ${levelsUp} levels to root: ${rootCodebasePath}`)
      } catch (error) {
        console.error(`[tsconfigPaths] Error calculating root path:`, error)
        // Fallback to using codebasePath as root
        rootCodebasePath = config.codebasePath
      }
    }

    console.log(`[tsconfigPaths] Root codebase path: ${rootCodebasePath}`)

    // Find all tsconfig.json files in the root codebase
    const tsConfigPaths = fastGlob.sync('**/tsconfig.json', {
      cwd: rootCodebasePath,
      ignore: ['**/node_modules/**', '**/.temp/**', '**/dist/**'], // Ignore node_modules, temp, and dist directories
      absolute: true // Get absolute paths
    })

    console.log(`[tsconfigPaths] Found ${tsConfigPaths.length} tsconfig.json files`)

    // Convert absolute paths to relative paths from the current codebasePath
    const relativeTsConfigPaths = tsConfigPaths.map((tsConfigPath) => {
      // Make the path relative to the current codebasePath
      const relativePath = path.relative(config.codebasePath, tsConfigPath)
      console.log(`[tsconfigPaths] Adding tsconfig: ${relativePath}`)
      return relativePath
    })

    // Always include the local tsconfig.json if it exists
    const localTsConfigPath = 'tsconfig.json'
    const localTsConfigFullPath = path.join(config.codebasePath, localTsConfigPath)

    if (fs.existsSync(localTsConfigFullPath) && !relativeTsConfigPaths.includes(localTsConfigPath)) {
      console.log(`[tsconfigPaths] Adding local tsconfig.json`)
      relativeTsConfigPaths.unshift(localTsConfigPath)
    }

    if (relativeTsConfigPaths.length === 0) {
      console.warn(`[tsconfigPaths] No tsconfig.json files found, falling back to default`)
      return ['tsconfig.json']
    }

    return relativeTsConfigPaths
  } catch (error) {
    console.error(`[tsconfigPaths] Error finding tsconfig files:`, error)
    // Fallback to default tsconfig paths
    return ['tsconfig.json']
  }
}

export type ViteServerResult = { type: 'started'; port: number } | { type: 'error'; error: string }

export async function startViteServer(config: ViteWorkerConfig, tempDirFullPath: string): Promise<ViteServerResult> {
  try {
    // Find all tsconfig.json files in the project
    const tsConfigPaths = findAllTsConfigFiles(config)
    // Write tsconfig paths to file for debugging

    console.log('tsConfigPaths written to tsconfig-paths.json')

    const server = await createServer({
      plugins: [
        // Add our HMR disabling plugin
        // createDisableHmrPlugin(),
        // Add our Node.js polyfills plugins
        react(),

        // createDisableHmrPlugin(),
        createNodePolyfillsPlugin(),
        createGlobalPolyfillsPlugin(),
        // Add our auto-alias plugin to automatically create aliases for top-level directories
        createAutoAliasPlugin(config.codebasePath),
        // processEnvFakeValuesPlugin(),
        Inspect(),
        commonjs(),
        NgmiPolyfill({
          nodeGlobalsOptions: {
            buffer: false,
            process: false
          }
        }),
        DynamicPublicDirectory([path.join(config.tempDir, 'dessn-component-routes/**'), path.join('public/**')]),
        // Configure SVG imports:
        // - Default: import MySvg from './icon.svg' -> React component
        // - With ?react: import MySvg from './icon.svg?react' -> React component (same as default)
        // - With ?url: import svgUrl from './icon.svg?url' -> URL string
        {
          name: 'vite-plugin-svgr-component',
          enforce: 'pre',
          async transform(code: string, id: string) {
            // Skip if not an SVG file
            if (!id.includes('.svg')) return null

            // Handle SVGs with ?url suffix as URLs instead of components
            if (id.includes('.svg?url')) {
              const svgPath = id.replace(/\?url.*$/, '')
              return `
                const url = new URL(${JSON.stringify(svgPath)}, import.meta.url).href;
                export default url;
              `
            }

            // Handle all other SVGs as React components
            const svgPath = id.replace(/\?.*$/, '')
            if (svgPath.endsWith('.svg')) {
              const { transform } = await import('@svgr/core')
              const svg = await fs.promises.readFile(svgPath, 'utf8')

              const componentCode = await transform(
                svg,
                {
                  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                  exportType: 'default',
                  ref: true,
                  titleProp: true
                },
                { filePath: svgPath }
              )

              // Transform the component code with esbuild to make it compatible with Vite
              const result = await transformWithEsbuild(componentCode, id, {
                loader: 'jsx'
              })

              return result.code
            }

            return null
          }
        },
        tsconfigPaths({
          projects: tsConfigPaths
        }),

        createHtmlPlugin({
          entry: '.temp/main.tsx',
          template: '.temp/index.html'
        }),
        // nextJsStubsPlugin(tempDirFullPath),
        componentRoutesPlugin(tempDirFullPath),
        createCssImportReorganizePlugin()
      ] as any, // Type assertion to avoid Vite plugin type issues

      publicDir: false,

      define: {
        // Empty process.env object that will be populated by our plugin
        process: { env: {} },
        global: 'globalThis'
      },
      server: {
        port: config.vitePort,
        allowedHosts: true,
        // Configure HMR to disable the overlay but keep the connection
        // Our plugin will intercept and block all HMR and full-reload messages

        // Disable watch mode to prevent automatic reloads
        watch: {
          interval: 999999
        }
      },

      optimizeDeps: {
        include: [
          'design-system',
          '@calcom/lib',
          '@calcom/features',
          '@calcom/prisma',
          '@calcom/dayjs',
          '@calcom/platform-constants',
          '@calcom/platform-types',
          '@calcom/platform-utils'
        ],
        exclude: ['class-transformer/storage'],
        esbuildOptions: {
          define: {
            global: 'globalThis'
          }
        }
      }
    })

    await server.listen()
    return { type: 'started', port: config.vitePort }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    return { type: 'error', error: errorMessage }
  }
}
