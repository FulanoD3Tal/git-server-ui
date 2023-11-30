import { useMutation } from '@tanstack/react-query';
import { deleteRepo, postRepo } from '../http/repo-rest-repository';
import { AxiosError } from 'axios';

export const useRepo = () => {
  const { mutate, isPending } = useMutation<
    Repository,
    AxiosError<{ message: string }>,
    NewRepository
  >({
    mutationFn: postRepo,
  });

  const { mutate: delRepo, isPending: isDeleting } = useMutation({
    mutationFn: deleteRepo,
  });

  return {
    createRepo: mutate,
    isPending,
    delRepo,
    isDeleting,
  };
};
