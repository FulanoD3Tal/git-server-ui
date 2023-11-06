import { describe, it, expect, afterAll } from 'vitest';
import { createRepository } from './gitLib';
import fsAsync from 'fs/promises';
import fs from 'fs';
import { execSync } from 'child_process';

describe('Git Library', () => {
  const respositoryTest = 'dirTest/repo-test';
  afterAll(async () => {
    const files = await fsAsync.readdir('./dirTest', { withFileTypes: true });
    files.forEach((f) => {
      if (f.name !== '.keep' && f.name !== 'subDir') {
        execSync(`rm -rf ${f.path}/${f.name}`);
      }
    });
  });
  it('should create a new repository', async () => {
    await createRepository(respositoryTest);
    expect(fs.existsSync(respositoryTest)).toBe(true);
  });

  it('should throw error if git repo already exists', async () => {
    await expect(() => createRepository(respositoryTest)).rejects.toThrowError(
      /already exists/
    );
  });
});
