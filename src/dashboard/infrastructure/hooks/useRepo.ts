import { useMutation } from '@tanstack/react-query';
import { postRepo } from '../http/repo-rest-repository';
import { AxiosError } from 'axios';

export const useRepo = () => {
  const { mutate, isPending } = useMutation<
    Repository,
    AxiosError<{ message: string }>,
    NewRepository
  >({
    mutationFn: postRepo,
  });
  return {
    createRepo: mutate,
    isPending,
  };
};
