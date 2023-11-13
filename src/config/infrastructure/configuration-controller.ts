import { ConfigurationSaver } from '../application/configuration-saver';
import { ConfigurationValidator } from './configuration-validator';
import { JsonFileConfig } from './json-file-config';

const inMemoryConfigSave = new JsonFileConfig();

const zodConfigValidator = new ConfigurationValidator();

export const configurationController = new ConfigurationSaver(
  inMemoryConfigSave,
  zodConfigValidator
);
