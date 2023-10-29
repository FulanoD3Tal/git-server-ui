import { FC } from 'react';
import { RepositoryItem } from '../atoms/repository-item';

type RepositoryList = {
  /** Elements to show */
  items: Repository[];
  /**
   * message to show when items are empty
   */
  emptyMessage: string;
};
/**
 * Component to show a list of RepositoryItem
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const RepositoryList: FC<RepositoryList> = ({ items, emptyMessage }) => {
  return (
    <ul role='list' className='flex flex-col gap-3'>
      {items.length === 0 && (
        <li className='mx-auto text-xl italic text-gray-500'>
          <span role='alert'>{emptyMessage}</span>
        </li>
      )}
      {items.map((item) => (
        <RepositoryItem key={item.name} {...item} />
      ))}
    </ul>
  );
};
