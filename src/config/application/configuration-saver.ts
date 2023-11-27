import { IConfiguration } from '../domain/configuration-interface';
import { IConfigValidator } from '../domain/configuration-validator-interface';
import { DEFAULT_CONFIG } from '../domain/constants';

export class ConfigurationSaver {
  constructor(
    private readonly configuration: IConfiguration,
    private readonly configurationValidator: IConfigValidator
  ) {}

  /**
   * Get actual configuration
   * @returns
   * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
   */
  async getConfig() {
    const config = await this.configuration.getConfigFile();
    if (!config) return DEFAULT_CONFIG;
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
    const parsedConfig = this.configurationValidator.validate(actualConfig);
    const saved = this.configuration.saveConfigFile(parsedConfig);
    if (!saved) return null;
    return actualConfig;
  }
}
