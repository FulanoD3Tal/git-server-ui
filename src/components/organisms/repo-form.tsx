'use client';

import { useRepoForm } from '@/dashboard/infrastructure/hooks/use-repo-form';
import { BaseButton } from '../atoms/base-btn';
import { ConfigField } from '../molecules/config-field/config-field';
import { useRepo } from '@/dashboard/infrastructure/hooks/useRepo';
import { useRouter } from 'next/navigation';

export const RepoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useRepoForm({});

  const { push } = useRouter();

  const { createRepo, isPending } = useRepo({});

  const onSubmit = (data: NewRepository) => {
    createRepo(data, {
      onError(error) {
        const message = error.response?.data.message;
        if (message) {
          setError('root.serverError', { message, type: '409' });
        } else {
          setError('root.serverError', {
            message: 'There was an error, try again',
            type: '500',
          });
        }
      },
      onSuccess() {
        push('/');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <ConfigField
        label='Repo name'
        textBoxProps={{
          ...register('name'),
          id: 'repo-name',
          'aria-label': 'Repo name',
          label: 'My awesome repo',
          disabled: isPending,
        }}
        error={Boolean(errors.name || errors?.root?.serverError)}
        hitText={errors.name?.message || errors?.root?.serverError.message}
      />
      <BaseButton className='ml-auto' disabled={isPending} type='submit'>
        {isPending ? '...Creating' : 'Create repo'}
      </BaseButton>
    </form>
  );
};
