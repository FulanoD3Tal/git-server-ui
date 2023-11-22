import { execSync } from 'child_process';
import { IFolderFinder } from '../domain/folder-repository-interface';
import fs from 'fs/promises';

export class FolderFinderFS implements IFolderFinder {
  async getAllFolders(rootPath: string): Promise<string[]> {
    const files = await fs.readdir(rootPath, {
      withFileTypes: true,
      recursive: false,
    });
    const directoriesOnly = files
      .filter((file) => file.isDirectory())
      .map((folder) => `${folder.path}/${folder.name}`);
    return directoriesOnly;
  }
  remove(repoPath: string): boolean {
    try {
      execSync(`rm -rf ${repoPath}`);
      return true;
    } catch (error) {
      // TODO: log the error
      return false;
    }
  }
}
