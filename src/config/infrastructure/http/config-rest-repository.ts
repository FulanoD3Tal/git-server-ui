import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getConfig, postConfig } from './rest-repository';

export const useRestConfig = () => {
  const query = useQuery({
    queryKey: ['config'],
    queryFn: getConfig,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postConfig,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['config'] });
    },
  });

  return { query, mutation };
};
