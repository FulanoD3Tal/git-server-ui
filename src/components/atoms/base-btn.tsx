'use client';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { clsx } from 'clsx';
import { MotionProps, motion } from 'framer-motion';

type ButtonType = 'primary' | 'secondary';

type BaseButtonProps = {
  btnType?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  function BaseButton(
    { btnType = 'primary', children, className, ...props },
    ref
  ) {
    return (
      <motion.button
        ref={ref}
        whileTap={{
          scale: 0.98,
        }}
        className={`py-2 px-6 rounded-md transition-colors  ${clsx(
          btnType === 'primary' &&
            'bg-slate-700 text-white disabled:bg-slate-700/60 dark:border-none dark:disabled:text-white/60',
          btnType === 'secondary' &&
            'border-slate-700 text-slate-700 hover:text-white hover:bg-slate-700 disabled:border-slate-700/60 disabled:text-slate-700/60 dark:text-white border dark:disabled:text-white/60'
        )} ${className}`}
        {...(props as MotionProps)}
      >
        {children}
      </motion.button>
    );
  }
);
