import { RepositoryService } from '../application/repository-service';
import { FolderFinderFS } from './folder-finder-fs';
import { InMemoryRepositoryPrismaSQLite } from './in-memory-repo-prisma-sqlite';
import { RepositorySimpleGit } from './repository-git-npm';
import { RepositoryValidatorZod } from './repository-validator-zod';

const repoValidator = new RepositoryValidatorZod();
const folderFinder = new FolderFinderFS();
const repoRepository = new RepositorySimpleGit();
const inMemoryRepository = new InMemoryRepositoryPrismaSQLite();

export const repositoryController = new RepositoryService(
  repoValidator,
  folderFinder,
  repoRepository,
  inMemoryRepository
);
