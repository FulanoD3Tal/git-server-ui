import simpleGit from 'simple-git';
import { IRepository } from '../domain/repository-interface';
import fs from 'fs';

export class RepositorySimpleGit implements IRepository {
  async createRepo(newRepo: Repository): Promise<Repository> {
    const git = simpleGit();
    if (fs.existsSync(newRepo.path)) {
      throw new Error(`Repo ${newRepo.name} already exists`);
    }
    try {
      await git.init([newRepo.path]);
      return { ...newRepo, lastUpdated: new Date() };
    } catch (error) {
      throw new Error('There was and error creating the repo');
    }
  }
}
