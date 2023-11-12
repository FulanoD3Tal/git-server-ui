import { ConfigurationSaver } from '../application/configuration-saver';
import { JsonFileConfig } from './json-file-config';

const inMemoryConfigSave = new JsonFileConfig();

export const configurationController = new ConfigurationSaver(
  inMemoryConfigSave
);
