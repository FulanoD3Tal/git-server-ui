import { execSync } from 'child_process';
import { IFolderFinder } from '../domain/folder-repository-interface';

export class FolderFinderFS implements IFolderFinder {
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
