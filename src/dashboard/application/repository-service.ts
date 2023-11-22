import { IFolderFinder } from '../domain/folder-repository-interface';
import { IRepository } from '../domain/repository-interface';
import { IRepositoryValidator } from '../domain/repository-validator-interface';

export class RepositoryService {
  constructor(
    private readonly repoValidator: IRepositoryValidator,
    private readonly folderRepository: IFolderFinder,
    private readonly repository: IRepository
  ) {}

  async getRepos(rootPath: string) {
    const reposPaths = await this.folderRepository.getAllFolders(rootPath);
    return await this.repository.getAllRepos(reposPaths);
  }
  createRepo(newRepo: NewRepository) {
    const parsedRepo = this.repoValidator.validate(newRepo);
    return this.repository.createRepo(parsedRepo);
  }
  deleteRepo(repoPath: string) {
    return this.folderRepository.remove(repoPath);
  }
}
