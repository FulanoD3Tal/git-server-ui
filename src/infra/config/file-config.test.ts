import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { getConfigFile, saveConfigFile } from './file-config';
import { unlinkSync, writeFileSync } from 'fs';

const testConfigFilePath = './config/config-test.json';

const createTestFileConfig = () => {
  const emptyConfig = JSON.stringify({});
  writeFileSync(testConfigFilePath, emptyConfig, { encoding: 'utf-8' });
};

const cleanConfigFile = () => {
  unlinkSync(testConfigFilePath);
};

describe('Config file', () => {
  vi.stubEnv('CONFIG_FILE_PATH', testConfigFilePath);

  beforeAll(createTestFileConfig);
  afterAll(cleanConfigFile);
  it('should read the file config', () => {
    const configFileEmpty = {};
    expect(getConfigFile()).toEqual(configFileEmpty);
  });

  it('should write into the file config', () => {
    const configFile: Config = { rootPath: './dirTest' };
    saveConfigFile(configFile);
    expect(getConfigFile()).toEqual(configFile);
  });
});
