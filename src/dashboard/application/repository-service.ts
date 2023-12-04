import { IFolderFinder } from '../domain/folder-repository-interface';
import { IInMemoryRepository } from '../domain/in-memory-repository-repository';
import { IRepository } from '../domain/repository-interface';
import { IRepositoryValidator } from '../domain/repository-validator-interface';

export class RepositoryService {
  constructor(
    private readonly repoValidator: IRepositoryValidator,
    private readonly folderRepository: IFolderFinder,
    private readonly gitRepository: IRepository,
    private readonly inMemoryRepository: IInMemoryRepository
  ) {}

  async getRepos(params: RepositoryQueryParams) {
    return await this.inMemoryRepository.list(params);
  }
  async createRepo(newRepo: NewRepository, defaultBranch: string) {
    const parsedRepo = this.repoValidator.validate(newRepo);
    const createdRepo = await this.inMemoryRepository.createRepo(parsedRepo);
    if (createdRepo) {
      await this.gitRepository.createRepo(createdRepo,defaultBranch);
    }
    return createdRepo;
  }
  async deleteRepo(id: Repository['uuid']) {
    const deleted = await this.inMemoryRepository.deleteRepo(id);
    if (deleted) {
      this.folderRepository.remove(deleted.path);
    }
    return deleted;
  }
}
