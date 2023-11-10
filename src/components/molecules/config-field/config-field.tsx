import { TextBox, TextBoxProps } from '@/components/atoms/textbox';
import { FC } from 'react';

type ConfigFieldProps = {
  /** label to show with the textbox */
  label: string;
  /** textbox props from TextBox component */
  textBoxProps?: TextBoxProps;
};

/**
 * Single configuration field
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const ConfigField: FC<ConfigFieldProps> = ({ label, textBoxProps }) => {
  return (
    <fieldset>
      <label className='flex flex-col gap-2 md:flex-row md:items-center'>
        <span className='px-3 md:min-w-[200px] md:text-right'>{label}</span>
        <TextBox
          className={`bg-slate-100 py-1 rounded-md px-3 md:flex-1 ${textBoxProps?.className}`}
          {...(textBoxProps as TextBoxProps)}
        />
      </label>
    </fieldset>
  );
};
