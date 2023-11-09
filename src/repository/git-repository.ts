import { getFolders } from '@/utils/folderUtils';

/**
 * Get all repo from a root path
 * @param rootPath 
 * @returns 
 */
export async function getAllRepos(rootPath: string) {
  if (!rootPath || rootPath === '')
    throw new Error('root path can not be empty');
  const folders = await getFolders(rootPath);
  // TODO: add info about the commit
  return folders.map((folder) => ({ ...folder, lastUpdated: '' }));
}
