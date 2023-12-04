import simpleGit from 'simple-git';
import { IRepository } from '../domain/repository-interface';
import fs from 'fs';

export class RepositorySimpleGit implements IRepository {
  async getLastUpdated(gitPath: string): Promise<string> {
    const git = simpleGit({ baseDir: gitPath });
    let lastUpdated = '';
    try {
      lastUpdated = await git.show(['--format="%aI"', '-s']);
    } catch (error) {
      lastUpdated = 'No commit yet';
    }
    return lastUpdated;
  }
  async createRepo(
    newRepo: Repository,
    defaultBranch: string
  ): Promise<Repository> {
    const git = simpleGit();
    if (fs.existsSync(newRepo.path)) {
      throw new Error(`Repo ${newRepo.name} already exists`);
    }
    try {
      await git.init(true, [`--initial-branch=${defaultBranch}`, newRepo.path]);
      return { ...newRepo, lastUpdated: new Date() };
    } catch (error) {
      throw new Error('There was and error creating the repo');
    }
  }
}
