import { FC, InputHTMLAttributes, LegacyRef, forwardRef } from 'react';

export type TextBoxProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  function TextBox({ label, className, ...props }, ref) {
    return (
      <input
        aria-label={label}
        placeholder={label}
        className={`outline-none dark:bg-slate-500 ${className}`}
        {...props}
        ref={ref}
      />
    );
  }
);
