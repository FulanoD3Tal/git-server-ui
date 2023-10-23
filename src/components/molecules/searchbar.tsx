import { FC } from 'react';
import { TextBox, TextBoxProps } from '../atoms/textbox';

type SearchBarProps = {
  textBoxProps: TextBoxProps;
  error?: boolean;
  hintText?: string;
};

export const SearchBar: FC<SearchBarProps> = ({
  textBoxProps,
  error = false,
  hintText,
}) => (
  <form className='border p-2 rounded-md flex gap-2 justify-between items-center'>
    <TextBox {...textBoxProps} />
    <span
      className={`${error ? 'text-red-500' : 'opacity-50'} text-sm`}
      role='alert'
    >
      {hintText}
    </span>
  </form>
);
