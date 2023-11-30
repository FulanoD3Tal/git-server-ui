'use client';
import { FC, useState } from 'react';
import { clsx } from 'clsx';
import { BaseButton } from './base-btn';
import { AnimatePresence } from 'framer-motion';
import { useRepo } from '@/dashboard/infrastructure/hooks/useRepo';

type RepositoryItemProps = Repository & {
  loading?: boolean;
};

export const RepositoryItem: FC<RepositoryItemProps> = ({
  name,
  uuid,
  lastUpdated,
  loading = false,
}) => {
  const [confirm, setConfirm] = useState(false);

  const handleConfirmBtn = () => setConfirm((prev) => !prev);

  const { delRepo } = useRepo();

  const handleYesBtn = () => {
    delRepo(uuid);
  };

  return (
    <li
      role='listitem'
      aria-label={name}
      className='list-none border-b dark:border-b-gray-600 py-1'
    >
      <h3
        className={`${clsx(
          'text-xl font-semibold truncate mb-2 transition-opacity',
          loading && 'opacity-60'
        )}`}
      >
        {name}
      </h3>
      {/* TODO: add relative time */}
      <p className='text-sm opacity-60 mb-4'>{lastUpdated?.toISOString()}</p>
      <div className='flex flex-row gap-2'>
        <BaseButton
          btnType='primary'
          onClick={handleConfirmBtn}
          disabled={confirm}
          className='z-30 !p-2'
          aria-label='delete'
        >
          <svg
            height='24'
            viewBox='0 -960 960 960'
            width='24'
            className='fill-current'
          >
            <path d='M304.615-160Q277-160 258.5-178.5 240-197 240-224.615V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.385Q720-197 701.5-178.5 683-160 655.385-160h-350.77Zm87.692-120h40.001v-360h-40.001v360Zm135.385 0h40.001v-360h-40.001v360Z' />
          </svg>
        </BaseButton>
        <AnimatePresence mode='popLayout'>
          {confirm && (
            <BaseButton
              className='!px-3'
              key='btn-yes'
              onClick={handleYesBtn}
              initial={{ x: '-100%', opacity: 0, zIndex: 20 }}
              animate={{ x: 0, opacity: 1, zIndex: 20 }}
              exit={{ x: '-100%', opacity: 1, zIndex: 20 }}
              btnType='primary'
              aria-label='yes'
              transition={{
                type: 'spring',
                duration: 0.2,
              }}
            >
              <svg
                height='24'
                viewBox='0 -960 960 960'
                width='24'
                className='fill-current'
              >
                <path d='m382-267.692-198.769-198.77L211.769-495 382-324.769 748.231-691l28.538 28.538L382-267.692Z' />
              </svg>
            </BaseButton>
          )}
          {confirm && (
            <BaseButton
              className='z-10 !px-3'
              key='btn-no'
              btnType='secondary'
              onClick={handleConfirmBtn}
              initial={{ x: '-200%', opacity: 0, zIndex: 10 }}
              animate={{ x: 0, opacity: 1, zIndex: 10 }}
              exit={{ x: '-200%', opacity: 1, zIndex: 10 }}
              aria-label='no'
              transition={{
                type: 'spring',
                duration: 0.4,
              }}
            >
              <svg
                height='24'
                viewBox='0 -960 960 960'
                width='24'
                className='fill-current'
              >
                <path d='M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z' />
              </svg>
            </BaseButton>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};
