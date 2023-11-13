import { TextBox, TextBoxProps } from '@/components/atoms/textbox';
import { FC } from 'react';

type ConfigFieldProps = {
  /** label to show with the textbox */
  label: string;
  /** textbox props from TextBox component */
  textBoxProps?: TextBoxProps;
  /**error state */
  error?: boolean;
  /**a little message to show below */
  hitText?: string;
};

/**
 * Single configuration field
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const ConfigField: FC<ConfigFieldProps> = ({
  label,
  textBoxProps,
  error = false,
  hitText,
}) => {
  return (
    <fieldset className='grid grid-cols-1 md:grid-cols-[250px_1fr]'>
      <label
        id={`label-${label}`}
        htmlFor={`field-${label}`}
        className='flex flex-col gap-2 md:flex-row md:items-center md:col-start-1'
      >
        <span className='px-3 md:min-w-[200px]'>{label}</span>
      </label>
      <TextBox
        aria-labelledby={`label-${label}`}
        id={`field-${label}`}
        className={`bg-slate-100 md:col-start-2 py-1 rounded-md px-3 md:flex-1 ${textBoxProps?.className}`}
        {...(textBoxProps as TextBoxProps)}
      />
      {error && (
        <span
          className='text-red-500 text-sm mt-1 md:col-start-2 md:row-start-2'
          role='alert'
        >
          {hitText}
        </span>
      )}
    </fieldset>
  );
};
