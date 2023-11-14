import { describe, it, expect } from 'vitest';
import { ConfigurationValidator } from './configuration-validator';

describe('ConfigurationValidator', () => {
  it('should throw the necessary errors', async () => {
    const zodConfigValidator = new ConfigurationValidator();
    const badConfig = { defaultBranch: '', rootPath: '' };
    expect(() => zodConfigValidator.validate(badConfig)).toThrowError();
  });
});
