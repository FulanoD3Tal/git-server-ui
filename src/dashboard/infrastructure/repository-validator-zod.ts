import { z } from 'zod';
import { IRepositoryValidator } from '../domain/repository-validator-interface';

export class RepositoryValidatorZod implements IRepositoryValidator {
  validate(config: NewRepository): NewRepository {
    return configSchema.parse(config);
  }
}

export const configSchema = z.object({
  name: z.string().min(3).trim(),
  path: z.string().trim(),
});
