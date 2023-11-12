export interface IConfiguration {
  getConfigFile(): PartialConfig | null;
  saveConfigFile(config: PartialConfig): boolean;
}
