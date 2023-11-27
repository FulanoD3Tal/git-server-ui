import { IInMemoryRepository } from '../domain/in-memory-repository-repository';

export class InMemoryRepositoryPrismaSQLite implements IInMemoryRepository {
  list(): Promise<Repository[]> {
    throw new Error('Method not implemented.');
  }
  createRepo(newRepo: NewRepository): Promise<Repository> {
    throw new Error('Method not implemented.');
  }
  deleteRepo(idRepo: string): Promise<Repository> {
    throw new Error('Method not implemented.');
  }
}
