import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { unlinkSync, writeFileSync } from 'fs';
import { JsonFileConfig } from './json-file-config';

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
    const jsonFileConfig = new JsonFileConfig();
    expect(jsonFileConfig.getConfigFile()).toEqual(configFileEmpty);
  });

  it('should write into the file config', () => {
    const configFile: PartialConfig = { rootPath: './dirTest' };
    const jsonFileConfig = new JsonFileConfig();

    jsonFileConfig.saveConfigFile(configFile);
    expect(jsonFileConfig.getConfigFile()).toEqual(configFile);
  });
});
