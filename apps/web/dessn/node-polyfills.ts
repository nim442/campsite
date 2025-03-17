import type { Plugin } from 'vite';

// Implementations of Node.js modules for browser environments
const polyfillImplementations: Record<string, string> = {
  // Querystring implementation
  querystring: `
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
  `,

  // Buffer implementation
  buffer: `
    class BufferPolyfill extends Uint8Array {
      static from(data, encoding) {
        if (typeof data === 'string') {
          return new TextEncoder().encode(data);
        }
        if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
          return new BufferPolyfill(data);
        }
        return data;
      }
      
      static isBuffer(obj) {
        return obj instanceof BufferPolyfill || obj instanceof Uint8Array;
      }
      
      static alloc(size, fill = 0) {
        const buffer = new BufferPolyfill(size);
        if (fill !== 0) {
          buffer.fill(fill);
        }
        return buffer;
      }
      
      toString(encoding = 'utf8') {
        return new TextDecoder(encoding).decode(this);
      }
      
      fill(value, start = 0, end = this.length) {
        for (let i = start; i < end; i++) {
          this[i] = value;
        }
        return this;
      }
      
      copy(target, targetStart = 0, sourceStart = 0, sourceEnd = this.length) {
        const sourceBuffer = this.subarray(sourceStart, sourceEnd);
        target.set(sourceBuffer, targetStart);
        return sourceBuffer.length;
      }
    }
    
    
    
    // Make Buffer available globally
    if (typeof window !== 'undefined') {
      window.Buffer = BufferPolyfill;
    }
  `,

  // Path implementation
  path: `
    export function normalize(path) {
      // Remove duplicate slashes
      path = path.replace(/\\/+/g, '/');
      
      // Handle relative segments
      const parts = [];
      path.split('/').forEach(part => {
        if (part === '..') {
          parts.pop();
        } else if (part && part !== '.') {
          parts.push(part);
        }
      });
      
      return parts.join('/');
    }
    
    export function join(...paths) {
      return normalize(paths.filter(Boolean).join('/'));
    }
    
    export function dirname(path) {
      const parts = path.split('/');
      parts.pop();
      return parts.join('/') || '.';
    }
    
    export function basename(path, ext) {
      let base = path.split('/').pop() || '';
      if (ext && base.endsWith(ext)) {
        base = base.slice(0, -ext.length);
      }
      return base;
    }
    
    export function extname(path) {
      const base = basename(path);
      const lastDotIndex = base.lastIndexOf('.');
      return lastDotIndex < 0 ? '' : base.slice(lastDotIndex);
    }
    
    export function resolve(...paths) {
      let resolvedPath = '';
      
      for (let i = paths.length - 1; i >= 0; i--) {
        const path = paths[i];
        if (!path) continue;
        
        resolvedPath = path + (resolvedPath ? '/' + resolvedPath : '');
        if (path.startsWith('/')) break;
      }
      
      return normalize(resolvedPath);
    }
    
    export function isAbsolute(path) {
      return path.startsWith('/');
    }
    
    export const sep = '/';
    export const delimiter = ':';
  `,

  // Util implementation
  util: `
    export function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
    
    export function format(fmt, ...args) {
      if (typeof fmt !== 'string') {
        return args.map(x => String(x)).join(' ');
      }
      
      let i = 0;
      return fmt.replace(/%[sdj%]/g, match => {
        if (match === '%%') return '%';
        if (i >= args.length) return match;
        const arg = args[i++];
        
        switch (match) {
          case '%s': return String(arg);
          case '%d': return Number(arg).toString();
          case '%j': 
            try {
              return JSON.stringify(arg);
            } catch (_) {
              return '[Circular]';
            }
          default: return match;
        }
      });
    }
    
    export function inspect(obj, options = {}) {
      try {
        return JSON.stringify(obj, null, options.depth || 2);
      } catch (e) {
        return '[Object]';
      }
    }
    
    export function promisify(fn) {
      return function(...args) {
        return new Promise((resolve, reject) => {
          fn(...args, (err, ...results) => {
            if (err) return reject(err);
            if (results.length === 1) return resolve(results[0]);
            resolve(results);
          });
        });
      };
    }
    
    export const isArray = Array.isArray;
    export const isBoolean = (obj) => typeof obj === 'boolean';
    export const isNull = (obj) => obj === null;
    export const isNullOrUndefined = (obj) => obj === null || obj === undefined;
    export const isNumber = (obj) => typeof obj === 'number';
    export const isString = (obj) => typeof obj === 'string';
    export const isSymbol = (obj) => typeof obj === 'symbol';
    export const isUndefined = (obj) => obj === undefined;
    export const isObject = (obj) => obj !== null && typeof obj === 'object';
    export const isFunction = (obj) => typeof obj === 'function';
  `,

  // Events implementation
  events: `
    export class EventEmitter {
      constructor() {
        this._events = {};
        this._maxListeners = 10;
      }
      
      setMaxListeners(n) {
        this._maxListeners = n;
        return this;
      }
      
      getMaxListeners() {
        return this._maxListeners;
      }
      
      emit(type, ...args) {
        const handlers = this._events[type];
        if (!handlers) return false;
        
        if (typeof handlers === 'function') {
          handlers.apply(this, args);
        } else {
          const listeners = handlers.slice();
          for (const listener of listeners) {
            listener.apply(this, args);
          }
        }
        
        return true;
      }
      
      addListener(type, listener) {
        return this.on(type, listener);
      }
      
      on(type, listener) {
        if (typeof listener !== 'function') {
          throw new TypeError('Listener must be a function');
        }
        
        if (!this._events[type]) {
          this._events[type] = listener;
        } else if (typeof this._events[type] === 'function') {
          this._events[type] = [this._events[type], listener];
        } else {
          this._events[type].push(listener);
          
          if (this._events[type].length > this._maxListeners) {
            console.warn(\`Possible EventEmitter memory leak detected. \${this._events[type].length} \${type} listeners added.\`);
          }
        }
        
        return this;
      }
      
      once(type, listener) {
        const onceWrapper = (...args) => {
          this.removeListener(type, onceWrapper);
          listener.apply(this, args);
        };
        
        return this.on(type, onceWrapper);
      }
      
      removeListener(type, listener) {
        if (!this._events[type]) return this;
        
        if (this._events[type] === listener) {
          delete this._events[type];
        } else if (Array.isArray(this._events[type])) {
          const idx = this._events[type].indexOf(listener);
          if (idx !== -1) {
            this._events[type].splice(idx, 1);
            if (this._events[type].length === 1) {
              this._events[type] = this._events[type][0];
            }
          }
        }
        
        return this;
      }
      
      removeAllListeners(type) {
        if (type) {
          delete this._events[type];
        } else {
          this._events = {};
        }
        
        return this;
      }
      
      listeners(type) {
        if (!this._events[type]) return [];
        
        if (typeof this._events[type] === 'function') {
          return [this._events[type]];
        }
        
        return this._events[type].slice();
      }
    }
  `,

  // Stream implementation (basic)
  stream: `
    import { EventEmitter } from 'events';
    
    export class Stream extends EventEmitter {
      constructor() {
        super();
        this.readable = false;
        this.writable = false;
      }
      
      pipe(dest, options) {
        this.on('data', chunk => {
          if (dest.writable) {
            if (dest.write(chunk) === false) {
              this.pause();
            }
          }
        });
        
        dest.on('drain', () => {
          if (this.readable) {
            this.resume();
          }
        });
        
        this.on('end', () => {
          if ((!options || options.end !== false) && dest.end) {
            dest.end();
          }
        });
        
        this.on('error', err => {
          dest.emit('error', err);
        });
        
        return dest;
      }
    }
    
    export class Readable extends Stream {
      constructor() {
        super();
        this.readable = true;
        this._buffer = [];
        this._flowing = false;
      }
      
      pause() {
        this._flowing = false;
        return this;
      }
      
      resume() {
        if (!this._flowing) {
          this._flowing = true;
          while (this._buffer.length) {
            const chunk = this._buffer.shift();
            this.emit('data', chunk);
          }
        }
        return this;
      }
      
      push(chunk) {
        if (chunk === null) {
          this.emit('end');
          return;
        }
        
        if (this._flowing) {
          this.emit('data', chunk);
        } else {
          this._buffer.push(chunk);
        }
      }
    }
    
    export class Writable extends Stream {
      constructor() {
        super();
        this.writable = true;
      }
      
      write(chunk) {
        this.emit('data', chunk);
        return true;
      }
      
      end(chunk) {
        if (chunk) {
          this.write(chunk);
        }
        this.emit('end');
        return this;
      }
    }
  `,
};

// List of Node.js modules to polyfill
const nodeModules = [
  'querystring',
  'buffer',
  'path',
  'util',
  'events',
  'stream',
];

/**
 * Creates a plugin that injects Node.js polyfills directly into files that import them
 */
export function createNodePolyfillsPlugin(): Plugin {
  return {
    name: 'node-polyfills-inline',
    enforce: 'pre' as const,
    
    transform(code: string, id: string) {
      // Skip node_modules
      if (id.includes('node_modules')) return null;
      
      let newCode = code;
      let modified = false;
      
      // Check for imports of Node.js modules
      for (const moduleName of nodeModules) {
        // Skip if this file doesn't import this module
        if (!code.includes(`from "${moduleName}"`) && !code.includes(`from '${moduleName}'`)) {
          continue;
        }
        
        console.log(`[node-polyfills] Transforming ${moduleName} imports in ${id}`);
        
        // Handle named imports: import { x } from 'module'
        const namedImportRegex = new RegExp(`import\\s*{\\s*([^}]+)\\s*}\\s*from\\s*['"]${moduleName}['"]`, 'g');
        newCode = newCode.replace(namedImportRegex, (_match, _imports) => {
          modified = true;
          return `// Inline ${moduleName} polyfill
${polyfillImplementations[moduleName]}`;
        });
        
        // Handle default import: import x from 'module'
        const defaultImportRegex = new RegExp(`import\\s+(\\w+)\\s+from\\s*['"]${moduleName}['"]`, 'g');
        newCode = newCode.replace(defaultImportRegex, (_match, importName) => {
          modified = true;
          return `// Inline ${moduleName} polyfill
${polyfillImplementations[moduleName]}
const ${importName} = { ${Object.keys(getExports(moduleName)).join(', ')} };`;
        });
        
        // If we found and replaced an import, break the loop
        if (modified) {
          break;
        }
      }
      
      return modified ? newCode : null;
    }
  };
}

/**
 * Helper function to get the exports of a module
 */
function getExports(moduleName: string): Record<string, boolean> {
  switch (moduleName) {
    case 'querystring':
      return { stringify: true, parse: true };
    case 'buffer':
      return { Buffer: true };
    case 'path':
      return { 
        normalize: true, 
        join: true, 
        dirname: true, 
        basename: true, 
        extname: true, 
        resolve: true, 
        isAbsolute: true, 
        sep: true, 
        delimiter: true 
      };
    case 'util':
      return { 
        inherits: true, 
        format: true, 
        inspect: true, 
        promisify: true,
        isArray: true,
        isBoolean: true,
        isNull: true,
        isNullOrUndefined: true,
        isNumber: true,
        isString: true,
        isSymbol: true,
        isUndefined: true,
        isObject: true,
        isFunction: true
      };
    case 'events':
      return { EventEmitter: true };
    case 'stream':
      return { Stream: true, Readable: true, Writable: true };
    default:
      return {};
  }
}

/**
 * Creates a plugin to inject global polyfills into the HTML
 */
export function createGlobalPolyfillsPlugin(): Plugin {
  return {
    name: 'global-polyfills-injection',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: {},
          children: `
            // Global polyfills for Node.js modules
            ${polyfillImplementations.buffer}
            
            console.log('Node.js polyfills loaded');
          `,
          injectTo: 'head-prepend' as const
        }
      ];
    }
  };
} 