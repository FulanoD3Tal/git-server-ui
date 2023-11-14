import { z } from 'zod';
import { IConfigValidator } from '../domain/configuration-validator-interface';

export class ConfigurationValidator implements IConfigValidator {
  validate(config: PartialConfig): PartialConfig {
    return configSchema.parse(config);
  }
}

export const configSchema = z.object({
  defaultBranch: z.string().min(3).trim(),
  rootPath: z.string().min(1).trim(),
});
