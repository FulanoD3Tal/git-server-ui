import { writeFileSync, readFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { IConfiguration } from '../domain/configuration-interface';

export class JsonFileConfig implements IConfiguration {
  private loadFilePath() {
    const configFilePath = process.env.CONFIG_FILE_PATH;
    if (!configFilePath)
      throw new Error('CONFIG_FILE_PATH env variable is not available');
    return configFilePath;
  }
  async getConfigFile() {
    const configFilePath = this.loadFilePath();
    try {
      const rawData = await readFile(configFilePath, { encoding: 'utf-8' });
      const config: PartialConfig = JSON.parse(rawData as unknown as string);
      return config;
    } catch (error) {
      // TODO: Add logging for production only
      return null;
    }
  }

  saveConfigFile(config: PartialConfig) {
    const configFilePath = this.loadFilePath();
    try {
      const data = JSON.stringify(config, null, 2);
      writeFileSync(configFilePath, data, { encoding: 'utf8' });
      return true;
    } catch (error) {
      // TODO: Add logging for production only
      return false;
    }
  }
}
