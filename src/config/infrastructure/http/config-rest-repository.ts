import { useMutation, useQuery } from '@tanstack/react-query';
import { getConfig, postConfig } from './rest-repository';

type useRestConfigProps = {
  initialData?: PartialConfig;
};

export const useRestConfig = ({ initialData }: useRestConfigProps) => {
  const query = useQuery({
    queryKey: ['config'],
    queryFn: getConfig,
    initialData,
  });

  const mutation = useMutation({
    mutationFn:postConfig
  });

  return { query, mutation };
};
