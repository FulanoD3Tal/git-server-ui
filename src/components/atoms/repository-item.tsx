'use client';
import { FC, forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { BaseButton } from './base-btn';
import { AnimatePresence, motion } from 'framer-motion';
import { useRepoMutation } from '@/dashboard/infrastructure/hooks/use-repo';
import { relativeDate } from '@/shared/infrastructure/utils/date-utils';

type RepositoryItemProps = Repository;

export const RepositoryItem = forwardRef<HTMLLIElement, RepositoryItemProps>(
  function RepositoryItem({ name, uuid, lastUpdated }, ref) {
    const [confirm, setConfirm] = useState(false);

    const handleConfirmBtn = () => setConfirm((prev) => !prev);

    const { delRepo, isDeleting } = useRepoMutation();

    const handleYesBtn = () => {
      delRepo(uuid);
    };

    return (
      <motion.li
        ref={ref}
        key={uuid}
        role='listitem'
        aria-label={name}
        className='list-none border-b dark:border-b-gray-600 py-1'
        initial={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.3 }}
      >
        <h3
          className={`${clsx(
            'text-xl font-semibold truncate mb-2 transition-opacity',
            isDeleting && 'opacity-60'
          )}`}
        >
          {name}
        </h3>
        <p className='text-sm opacity-60 mb-4'>
          Updated {relativeDate(lastUpdated)}
        </p>
        <div className='flex flex-row gap-2'>
          <BaseButton
            btnType='primary'
            onClick={handleConfirmBtn}
            disabled={confirm}
            className='z-30 !p-2'
            aria-label={`delete repo ${name}`}
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
                aria-label={`confirm delete repo ${name}`}
                transition={{
                  type: 'spring',
                  duration: 0.2,
                }}
              >
                {!isDeleting && (
                  <motion.svg
                    height='24'
                    viewBox='0 -960 960 960'
                    width='24'
                    className='fill-current'
                    exit={{ scale: 0 }}
                  >
                    <path d='m382-267.692-198.769-198.77L211.769-495 382-324.769 748.231-691l28.538 28.538L382-267.692Z' />
                  </motion.svg>
                )}
                {isDeleting && (
                  <motion.svg
                    height='24'
                    viewBox='0 -960 960 960'
                    width='24'
                    className='fill-current'
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <path d='M479.757-120q-74.065 0-139.648-28.299-65.584-28.3-114.547-77.263-48.963-48.963-77.263-114.547Q120-405.692 120-479.757q0-74.968 28.423-140.451 28.423-65.484 77.154-114.215 48.731-48.731 114.588-77.154Q406.023-840 480-840q8.5 0 14.25 5.758 5.75 5.757 5.75 14.269 0 8.511-5.75 14.242Q488.5-800 480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-8.539 5.758-14.269Q811.516-500 820.027-500q8.512 0 14.242 5.75Q840-488.5 840-480q0 73.977-28.423 139.835-28.423 65.857-77.154 114.588-48.731 48.731-114.215 77.154Q554.725-120 479.757-120Z' />
                  </motion.svg>
                )}
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
                aria-label={`cancel delete repo ${name}`}
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
      </motion.li>
    );
  }
);
