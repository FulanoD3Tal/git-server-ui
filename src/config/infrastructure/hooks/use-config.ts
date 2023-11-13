import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { configSchema } from '../configuration-validator';

type useConfigProps = {
  previousData?: Config;
};

export const useConfig = ({ previousData }: useConfigProps) => {
  const form = useForm<Config>({
    reValidateMode: 'onChange',
    defaultValues: previousData,
    resolver: zodResolver(configSchema),
  });
  return { form };
};
