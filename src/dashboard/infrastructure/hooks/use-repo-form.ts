import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { configSchema } from '../repository-validator-zod';

type useRepoFormProps = {
  previousData?: NewRepository;
};

export const useRepoForm = ({ previousData }: useRepoFormProps) => {
  const form = useForm<NewRepository>({
    reValidateMode: 'onChange',
    defaultValues: previousData,
    resolver: zodResolver(configSchema),
  });
  return form;
};
