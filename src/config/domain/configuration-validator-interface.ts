export interface IConfigValidator {
  validate(config: PartialConfig): PartialConfig;
}
