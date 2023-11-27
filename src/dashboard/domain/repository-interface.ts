export interface IRepository {
  createRepo(newRepo: Repository): Promise<Repository>;
}
