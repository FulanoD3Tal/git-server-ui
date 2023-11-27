export interface IInMemoryRepository {
  list(): Promise<Repository[]>;
  createRepo(newRepo: NewRepository): Promise<Repository>;
  deleteRepo(idRepo: Repository['uuid']): Promise<Repository>;
}
