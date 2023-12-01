import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getRepos, postRepo, deleteRepo } from '../http/repo-rest-repository';
import { AxiosError } from 'axios';

type UseRepoProps = {
  query?: RepositoryQueryParams;
};

export const useRepoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation<
    Repository,
    AxiosError<{ message: string }>,
    NewRepository
  >({
    mutationFn: postRepo,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['repos'] });
    },
  });

  const { mutate: delRepo, isPending: isDeleting } = useMutation({
    mutationFn: deleteRepo,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['repos'] });
    },
  });

  return {
    createRepo: mutate,
    isPending,
    delRepo,
    isDeleting,
  };
};

export const useRepoQuery = ({ query = { query: '' } }: UseRepoProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['repos', query],
    queryFn: () => getRepos(query),
  });
  return {
    repos: data,
    isLoading,
  };
};
