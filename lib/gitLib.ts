import { simpleGit } from 'simple-git';
import fs from 'fs';

const git = simpleGit();

export async function createRepository(name: string) {
  if (fs.existsSync(name)) {
    throw new Error(`Repo ${name} already exists`);
  }
  return await git.init([name]);
}
