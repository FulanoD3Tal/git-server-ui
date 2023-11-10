import { describe, it, expect, vi, afterAll } from 'vitest';
import { DEFAULT_CONFIG, getConfig, setConfig } from './configuration';
import { unlinkSync, existsSync } from 'fs';

const testConfigFilePath = './config/config-test.json';

const cleanConfigFile = () => {
  if (existsSync(testConfigFilePath)) unlinkSync(testConfigFilePath);
};

describe('ConfigurationModule', () => {
  afterAll(cleanConfigFile);
  vi.stubEnv('CONFIG_FILE_PATH', testConfigFilePath);
  it('should have a default configuration', () => {
    expect(getConfig()).toMatchObject(DEFAULT_CONFIG);
  });
  it('should save a configuration field', () => {
    const newPath = 'test';
    expect(setConfig({ rootPath: newPath })).toMatchObject({
      ...DEFAULT_CONFIG,
      rootPath: newPath,
    });
  });
});
