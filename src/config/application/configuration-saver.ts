import { IConfiguration } from '../domain/configuration-interface';

export class ConfigurationSaver {
  constructor(private readonly configuration: IConfiguration) {}

  /**
   * Get actual configuration
   * @returns
   * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
   */
  getConfig() {
    const config = this.configuration.getConfigFile();
    if (!config) return null;
    return config;
  }
  /**
   * Save configuration using only parcial information
   * @param newConfig
   * @returns
   * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
   */
  setConfig(newConfig: PartialConfig) {
    const prevConfig = this.getConfig();
    const actualConfig = { ...prevConfig, ...newConfig };
    const saved = this.configuration.saveConfigFile(actualConfig);
    if (!saved) return null;
    return actualConfig;
  }
}
