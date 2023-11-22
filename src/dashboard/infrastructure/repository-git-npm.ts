import simpleGit from 'simple-git';
import { IRepository } from '../domain/repository-interface';
import fs from 'fs';

export class RepositorySimpleGit implements IRepository {
  async getAllRepos(paths: string[]): Promise<Repository[]> {
    const reposAsync = paths.map(async (path) => {
      const git = simpleGit({ baseDir: path });
      const split = path.split('/');
      const name = split[split.length - 1];
      let lastUpdated = '';
      try {
        lastUpdated = await git.show(['--format="%ar"', '-s']);
      } catch (error) {}
      return { name, lastUpdated };
    });

    return await Promise.all(reposAsync);
  }
  async createRepo(newRepo: NewRepository): Promise<Repository> {
    const git = simpleGit();
    if (fs.existsSync(newRepo.name)) {
      throw new Error(`Repo ${newRepo.name} already exists`);
    }
    try {
      await git.init([newRepo.name]);
      return { ...newRepo, lastUpdated: Date.now().toString() };
    } catch (error) {
      throw new Error('There was and error creating the repo');
    }
  }
}
