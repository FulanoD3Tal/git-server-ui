import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RepositoryService } from './repository-service';
import { IRepositoryValidator } from '../domain/repository-validator-interface';
import { IFolderFinder } from '../domain/folder-repository-interface';
import { IRepository } from '../domain/repository-interface';
import { IInMemoryRepository } from '../domain/in-memory-repository-repository';

class MockRepositoryValidator implements IRepositoryValidator {
  validate(repo: NewRepository) {
    return repo;
  }
}

class MockFolderRepository implements IFolderFinder {
  remove(repoPath: string): boolean {
    return true;
  }
}

const MockRepo = {
  name: 'repo-1',
  lastUpdated: new Date(),
  createdAt: new Date(),
  uuid: '',
  path: '',
};

const mockRepository: Repository[] = [MockRepo];

class MockGitRepository implements IRepository {
  async createRepo(newRepo: NewRepository) {
    return await Promise.resolve(MockRepo);
  }
}

class MockInMemoryRepository implements IInMemoryRepository {
  async list(): Promise<Repository[]> {
    return await Promise.resolve(mockRepository);
  }
  async createRepo(newRepo: NewRepository): Promise<Repository> {
    return await Promise.resolve(MockRepo);
  }
  async deleteRepo(idRepo: string): Promise<Repository> {
    return await Promise.resolve(MockRepo);
  }
}

describe('RespositoryService', () => {
  let repoService: RepositoryService;

  beforeEach(() => {
    const mockRepoValidator = new MockRepositoryValidator();
    const mockFolderFinder = new MockFolderRepository();
    const mockRepoRepo = new MockGitRepository();
    const mockInMemoryREpo = new MockInMemoryRepository();
    repoService = new RepositoryService(
      mockRepoValidator,
      mockFolderFinder,
      mockRepoRepo,
      mockInMemoryREpo
    );
  });
  it('should get all the repos', async () => {
    expect(repoService.getRepos()).resolves.to.deep.equals(mockRepository);
  });
  it('should create and return a new repo', () => {
    const { name, path } = MockRepo;
    expect(repoService.createRepo({ name, path })).resolves.to.deep.equals(
      MockRepo
    );
  });

  it('should delete a repo', () => {
    expect(repoService.deleteRepo('test')).resolves.to.deep.equals(MockRepo);
  });
});
