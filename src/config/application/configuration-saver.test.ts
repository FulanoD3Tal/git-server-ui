import { describe, it, expect, vi } from 'vitest';
import { ConfigurationSaver } from './configuration-saver';
import { IConfiguration } from '../domain/configuration-interface';
import { DEFAULT_CONFIG } from '../domain/constants';
import { IConfigValidator } from '../domain/configuration-validator-interface';

const testConfigFilePath = './config/config-test.json';

class MockConfiguration implements IConfiguration {
  async getConfigFile() {
    return await Promise.resolve(DEFAULT_CONFIG);
  }
  saveConfigFile(config: Partial<Config>): boolean {
    return true;
  }
}

class MockConfigValidator implements IConfigValidator {
  validate(config: Partial<Config>): Partial<Config> {
    return config;
  }
}

describe('ConfigurationModule', () => {
  vi.stubEnv('CONFIG_FILE_PATH', testConfigFilePath);
  const mockConfiguration = new MockConfiguration();
  const mockConfigValidator = new MockConfigValidator();
  const configurationSaver = new ConfigurationSaver(
    mockConfiguration,
    mockConfigValidator
  );
  it('should have a default configuration', () => {
    expect(configurationSaver.getConfig()).resolves.toBe(DEFAULT_CONFIG);
  });
  it('should save a configuration field', () => {
    const newPath = 'test';
    expect(configurationSaver.setConfig({ rootPath: newPath })).resolves.toMatchObject({
      ...DEFAULT_CONFIG,
      rootPath: newPath,
    });
  });
});
