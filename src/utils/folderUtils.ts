import fs from 'fs/promises';

/**
 * Get a list of directories given a root path
 * @param path 
 * @returns list of directories
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export async function getFolders(path: string) {
  const files = await fs.readdir(path, {
    withFileTypes: true,
    recursive: false,
  });
  const directoriesOnly = files.filter((file) => file.isDirectory());
  return directoriesOnly;
}
