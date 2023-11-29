import { z } from 'zod';
import { IRepositoryValidator } from '../domain/repository-validator-interface';

export class RepositoryValidatorZod implements IRepositoryValidator {
  validate(config: NewRepository): NewRepository {
    return configSchema.parse(config);
  }
}

export const configSchema = z.object({
  name: z
    .string()
    .min(3, 'Name repo need at lest 3 letters min')
    .trim()
    .toLowerCase()
    .transform((val) => val.replaceAll(' ', '-')),
  path: z.string().trim(),
});

export const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Name repo need at lest 3 letters min')
    .trim()
    .toLowerCase()
    .transform((val) => val.replaceAll(' ', '-')),
});
