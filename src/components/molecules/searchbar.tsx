'use client';
import { FC } from 'react';
import { TextBox, TextBoxProps } from '../atoms/textbox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type SearchBarProps = {
  textBoxProps: TextBoxProps;
};

export const SearchBar: FC<SearchBarProps> = ({ textBoxProps }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <nav className='border dark:bg-slate-500 p-2 rounded-md flex gap-2 justify-between items-center'>
      <TextBox
        {...textBoxProps}
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        className='flex-1'
      />
    </nav>
  );
};
