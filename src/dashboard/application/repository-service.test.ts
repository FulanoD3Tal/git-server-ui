import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RepositoryService } from './repository-service';
import { IRepositoryValidator } from '../domain/repository-validator-interface';
import { IFolderFinder } from '../domain/folder-repository-interface';
import { IRepository } from '../domain/repository-interface';

class MockRepositoryValidator implements IRepositoryValidator {
  validate(repo: NewRepository) {
    return repo;
  }
}

const mockFolders = ['test1'];

class MockFolderRepository implements IFolderFinder {
  async getAllFolders(rootPath: string): Promise<string[]> {
    return await Promise.resolve(mockFolders);
  }
  remove(repoPath: string): boolean {
    return true;
  }
}

const MockRepo = { name: 'repo-1', lastUpdated: 'foo' };

const mockRepository: Repository[] = [MockRepo];

class MockRepositoryRepository implements IRepository {
  async getAllRepos(paths: string[]) {
    return await Promise.resolve(mockRepository);
  }
  async createRepo(newRepo: NewRepository) {
    return await Promise.resolve(MockRepo);
  }
}

describe('RespositoryService', () => {
  let repoService: RepositoryService;

  beforeEach(() => {
    const mockRepoValidator = new MockRepositoryValidator();
    const mockFolderFinder = new MockFolderRepository();
    const mockRepoRepo = new MockRepositoryRepository();
    repoService = new RepositoryService(
      mockRepoValidator,
      mockFolderFinder,
      mockRepoRepo
    );
  });
  it('should get all the repos', async () => {
    expect(repoService.getRepos('test')).resolves.to.deep.equals(
      mockRepository
    );
  });
  it('should create and return a new repo', () => {
    const { name } = MockRepo;
    expect(repoService.createRepo({ name })).resolves.to.deep.equals(MockRepo);
  });

  it('should delete a repo', () => {
    expect(repoService.deleteRepo('test')).toBe(true);
  });
});
