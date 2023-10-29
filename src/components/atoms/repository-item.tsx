import { FC } from 'react';
import { clsx } from 'clsx';

type RepositoryItemProps = {
  name: string;
  lastUpdated: string;
  loading: boolean;
};

export const RepositoryItem: FC<RepositoryItemProps> = ({
  name,
  lastUpdated,
  loading = false,
}) => {
  return (
    <li role='listitem' aria-label={name} className='list-none border-b py-1'>
      <h3
        className={`${clsx(
          'text-xl font-semibold truncate mb-2 transition-opacity',
          loading && 'opacity-60'
        )}`}
      >
        {name}
      </h3>
      <p className='text-sm opacity-60'>{lastUpdated}</p>
    </li>
  );
};
