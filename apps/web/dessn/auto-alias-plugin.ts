import fs from 'fs';
import path from 'path';
import type { Plugin, ResolvedConfig } from 'vite';

/**
 * Creates a Vite plugin that automatically adds aliases for top-level directories
 * in the project's codebase path.
 * 
 * @param codebasePath - The root path of the codebase to scan for top-level directories
 * @param excludeDirs - Optional array of directory names to exclude from aliasing
 * @returns A Vite plugin that adds the aliases to the Vite config
 */
export function createAutoAliasPlugin(
  codebasePath: string,
  excludeDirs: string[] = [
    'node_modules',
    '.git',
    'dist',
    'build',
    '.temp',
    '.vscode',
    '.github',
    'public'
  ]
): Plugin {
  return {
    name: 'vite-plugin-auto-alias',
    
    configResolved(config: ResolvedConfig) {
      console.log(`[auto-alias] Scanning for top-level directories in: ${codebasePath}`);
    },
    
    config(config) {
      // Get all top-level directories
      const topLevelDirs = getTopLevelDirectories(codebasePath, excludeDirs);
      
      // Create alias map
      const aliasMap: Record<string, string> = {};
      
      topLevelDirs.forEach(dirName => {
        aliasMap[dirName] = path.join(codebasePath, dirName);
        console.log(`[auto-alias] Adding alias: ${dirName} -> ${aliasMap[dirName]}`);
      });
      
      // Return the updated config with aliases
      return {
        resolve: {
          alias: {
            ...aliasMap,
            // Preserve existing aliases if any
            ...(config.resolve?.alias || {})
          }
        }
      };
    }
  };
}

/**
 * Gets all top-level directories in the specified path, excluding any in the excludeDirs array.
 * 
 * @param dirPath - The directory path to scan
 * @param excludeDirs - Array of directory names to exclude
 * @returns Array of top-level directory names
 */
function getTopLevelDirectories(dirPath: string, excludeDirs: string[]): string[] {
  try {
    return fs.readdirSync(dirPath)
      .filter(item => {
        const itemPath = path.join(dirPath, item);
        
        // Check if it's a directory and not in the exclude list
        return (
          fs.statSync(itemPath).isDirectory() && 
          !excludeDirs.includes(item) &&
          !item.startsWith('.')  // Also exclude hidden directories
        );
      });
  } catch (error) {
    console.error(`[auto-alias] Error scanning directories:`, error);
    return [];
  }
} 