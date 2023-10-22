import { FC, InputHTMLAttributes, LegacyRef, forwardRef } from 'react';

type TextBoxProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  function TextBox({ label, ...props }, ref) {
    return (
      <input aria-label={label} placeholder={label} {...props} ref={ref} />
    );
  }
);
