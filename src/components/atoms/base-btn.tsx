import { ButtonHTMLAttributes, FC } from 'react';
import { clsx } from 'clsx';

type ButtonType = 'primary' | 'secondary';

type BaseButtonProps = {
  btnType?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<BaseButtonProps> = ({
  btnType = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`border py-2 px-6 rounded-md transition-colors ${clsx(
        btnType === 'primary' &&
          'bg-slate-700 text-white disabled:bg-slate-700/60',
        btnType === 'secondary' &&
          'border-slate-700 text-slate-700 disabled:border-slate-700/60 disabled:text-slate-700/60'
      )} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
