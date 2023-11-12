import { writeFileSync, readFileSync } from 'fs';
import { IConfiguration } from '../domain/configuration-interface';

export class JsonFileConfig implements IConfiguration {
  private loadFilePath() {
    const configFilePath = process.env.CONFIG_FILE_PATH;
    if (!configFilePath)
      throw new Error('CONFIG_FILE_PATH env variable is not available');
    return configFilePath;
  }
  getConfigFile() {
    const configFilePath = this.loadFilePath();
    try {
      const rawData = readFileSync(configFilePath);
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
