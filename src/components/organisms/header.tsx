'use client';
import { useTheme } from '@/theme/infrastructure/hooks/use-theme';
import React from 'react';
import { ThemeIconButton } from '../molecules/theme-icon-btn/theme-icon-btn';
import Link from 'next/link';

export const Header = () => {
  const { theme, toggleSwitch } = useTheme();
  return (
    <header className='p-1 flex justify-end items-center gap-4 max-w-7xl mx-auto'>
      <Link
        className='py-2 px-6 rounded-md transition-colors bg-slate-700 text-white disabled:bg-slate-700/60 dark:border-none dark:disabled:text-white/60'
        href={'/repo/new'}
      >
        New repo
      </Link>
      <Link className='hover:underline dark:text-white' href={'/config'}>
        Config
      </Link>
      <ThemeIconButton theme={theme} onSwitch={toggleSwitch} />
    </header>
  );
};
