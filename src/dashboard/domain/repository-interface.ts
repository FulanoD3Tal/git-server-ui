export interface IRepository {
  getAllRepos(paths: string[]): Promise<Repository[]>;
  createRepo(newRepo: NewRepository): Promise<Repository>;
}
