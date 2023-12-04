export interface IRepository {
  createRepo(newRepo: Repository, defaultBranch: string): Promise<Repository>;
  getLastUpdated(gitPath: string): Promise<string>;
}
