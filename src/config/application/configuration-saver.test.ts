import { describe, it, expect, vi, afterAll } from 'vitest';
import { ConfigurationSaver } from './configuration-saver';
import { unlinkSync, existsSync } from 'fs';
import { IConfiguration } from '../domain/configuration-interface';

const testConfigFilePath = './config/config-test.json';

const DEFAULT_CONFIG: PartialConfig = { defaultBranch: 'main' };

class MockConfiguration implements IConfiguration {
  getConfigFile(): Partial<Config> | null {
    return DEFAULT_CONFIG;
  }
  saveConfigFile(config: Partial<Config>): boolean {
    return true;
  }
}

describe('ConfigurationModule', () => {
  vi.stubEnv('CONFIG_FILE_PATH', testConfigFilePath);
  const mockConfiguration = new MockConfiguration();
  const configurationSaver = new ConfigurationSaver(mockConfiguration);
  it('should have a default configuration', () => {
    expect(configurationSaver.getConfig()).toBe(DEFAULT_CONFIG);
  });
  it('should save a configuration field', () => {
    const newPath = 'test';
    expect(configurationSaver.setConfig({ rootPath: newPath })).toMatchObject({
      ...DEFAULT_CONFIG,
      rootPath: newPath,
    });
  });
});
