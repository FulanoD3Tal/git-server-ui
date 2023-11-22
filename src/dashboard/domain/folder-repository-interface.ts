export interface IFolderFinder {
  getAllFolders(rootPath: string): Promise<string[]>;
  remove(repoPath: string): boolean;
}
