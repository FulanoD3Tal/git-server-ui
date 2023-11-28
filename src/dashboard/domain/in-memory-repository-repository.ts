export interface IInMemoryRepository {
  list(params:RepositoryQueryParams): Promise<Repository[]>;
  createRepo(newRepo: NewRepository): Promise<Repository>;
  deleteRepo(idRepo: Repository['uuid']): Promise<Repository>;
}
