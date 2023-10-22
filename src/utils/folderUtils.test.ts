import { describe, expect, it } from 'vitest';
import { getFolders } from './folderUtils';

describe('folderUtils', () => {
  it('getFolders return a list of folders roots', async () => {
    const path = './dirTest/';
    const folders = await getFolders(path);
    expect(folders.length).toBe(1);
  });
});
