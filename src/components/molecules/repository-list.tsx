'use client';
import { FC } from 'react';
import { RepositoryItem } from '../atoms/repository-item';
import { useRepo } from '@/dashboard/infrastructure/hooks/useRepo';
import { AnimatePresence } from 'framer-motion';

type RepositoryList = {
  query: RepositoryQueryParams;
  /**
   * message to show when items are empty
   */
  emptyMessage: string;
};
/**
 * Component to show a list of RepositoryItem
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const RepositoryList: FC<RepositoryList> = ({ query, emptyMessage }) => {
  const { repos } = useRepo({ query });
  return (
    <ul role='list' className='flex flex-col gap-3'>
      {repos?.length === 0 && (
        <li className='mx-auto text-xl italic text-gray-500'>
          <span role='alert'>{emptyMessage}</span>
        </li>
      )}
      <AnimatePresence mode='popLayout'>
        {repos?.map((item) => (
          <RepositoryItem key={item.name} {...item} />
        ))}
      </AnimatePresence>
    </ul>
  );
};
