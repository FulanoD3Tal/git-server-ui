import { getConfigFile, saveConfigFile } from '@/infra/config/file-config';

export const DEFAULT_CONFIG: PartialConfig = { defaultBranch: 'main' };

/**
 * Get actual configuration or get the default
 * @returns
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export function getConfig() {
  const config = getConfigFile();
  if (!config) return DEFAULT_CONFIG;
  return config;
}

/**
 * Save configuration using only parcial information
 * @param newConfig
 * @returns
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export function setConfig(newConfig: PartialConfig) {
  const prevConfig = getConfig();
  const actualConfig = { ...prevConfig, ...newConfig };
  const saved = saveConfigFile(actualConfig);
  if (!saved) return false;
  return actualConfig;
}
