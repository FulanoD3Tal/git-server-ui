export interface IRepository {
  createRepo(newRepo: Repository,defaultBranch:string): Promise<Repository>;
}
