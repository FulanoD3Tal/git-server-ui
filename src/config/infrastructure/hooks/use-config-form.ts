import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { configSchema } from '../configuration-validator';

type useConfigProps = {
  previousData?: PartialConfig;
};

export const useConfigForm = ({ previousData }: useConfigProps) => {
  const form = useForm<PartialConfig>({
    reValidateMode: 'onChange',
    defaultValues: previousData,
    resolver: zodResolver(configSchema),
  });
  return { form };
};
