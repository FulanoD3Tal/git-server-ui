/**
 * Component to show a the skeleton of list repositories
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */

const loadingItems = [...new Array(10)];

export const RepositoryListSkeleton = () => {
  return (
    <div role='list' className='flex flex-col gap-3'>
      {loadingItems.map((_, i) => (
        <li
          key={`loading-item-${i}`}
          role='listitem'
          className='list-none border-b dark:border-b-gray-600 py-1'
        >
          <div
            className={`
            h-6 bg-gray-100 dark:bg-slate-700 animate-pulse rounded-sm
            mb-2 w-1/2
          `}
          ></div>

          <p className='h-3 w-1/6 bg-gray-100 dark:bg-slate-700 animate-pulse rounded-sm'></p>
        </li>
      ))}
    </div>
  );
};
