import { writeFileSync, readFileSync } from 'fs';

function loadFilePath() {
  const configFilePath = process.env.CONFIG_FILE_PATH;
  if (!configFilePath)
    throw new Error('CONFIG_FILE_PATH env variable is not available');
  return configFilePath;
}

export function getConfigFile() {
  const configFilePath = loadFilePath();
  try {
    const rawData = readFileSync(configFilePath);
    const config: PartialConfig = JSON.parse(rawData as unknown as string);
    return config;
  } catch (error) {
    // TODO: Add logging for production only
    return null;
  }
}

export function saveConfigFile(config: PartialConfig) {
  const configFilePath = loadFilePath();
  try {
    const data = JSON.stringify(config, null, 2);
    writeFileSync(configFilePath, data, { encoding: 'utf8' });
    return true;
  } catch (error) {
    // TODO: Add logging for production only
    return false;
  }
}
