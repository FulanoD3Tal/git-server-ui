import { writeFileSync, readFileSync } from 'fs';

function loadFilePath() {
  const configFilePath = process.env.CONFIG_FILE_PATH;
  if (!configFilePath) throw new Error('config file not found it');
  return configFilePath;
}

export function getConfigFile() {
  const configFilePath = loadFilePath();
  try {
    const rawData = readFileSync(configFilePath);
    const config: Config = JSON.parse(rawData as unknown as string);
    return config;
  } catch (error) {
    console.log('Error reading the config file', error);
    return null;
  }
}

export function saveConfigFile(config: Config) {
  const configFilePath = loadFilePath();
  try {
    const data = JSON.stringify(config, null, 2);
    writeFileSync(configFilePath, data, { encoding: 'utf8' });
    return true;
  } catch (error) {
    console.log('Error saving the config file', error);
    return false;
  }
}
