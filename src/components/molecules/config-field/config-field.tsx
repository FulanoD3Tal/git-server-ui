'use client';
import { TextBox, TextBoxProps } from '@/components/atoms/textbox';
import { AnimatePresence, motion } from 'framer-motion';
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
  /**loading state */
  disabled?: boolean;
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
  disabled = false,
}) => {
  return (
    <fieldset className='grid grid-cols-1 md:grid-cols-[250px_1fr]'>
      <label
        id={`label-${label}`}
        htmlFor={`field-${label}`}
        className='flex flex-col gap-2 md:flex-row md:items-center md:col-start-1 dark:text-white'
      >
        <span className='px-3 md:min-w-[200px]'>{label}</span>
      </label>
      <TextBox
        aria-labelledby={`label-${label}`}
        id={`field-${label}`}
        className={`bg-slate-100 dark:bg-slate-500 dark:text-white disabled:opacity-60 transition-opacity md:col-start-2 py-1 rounded-md px-3 md:flex-1 ${textBoxProps?.className}`}
        disabled={disabled}
        {...(textBoxProps as TextBoxProps)}
      />
      <AnimatePresence>
        {error && (
          <motion.span
            className='text-red-500 dark:text-red-400 text-sm mt-1 md:col-start-2 md:row-start-2'
            role='alert'
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ type: 'spring', duration: 0.2 }}
          >
            {hitText}
          </motion.span>
        )}
      </AnimatePresence>
    </fieldset>
  );
};
