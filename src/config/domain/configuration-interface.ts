export interface IConfiguration {
  getConfigFile(): Promise<PartialConfig | null>;
  saveConfigFile(config: PartialConfig): boolean;
}
