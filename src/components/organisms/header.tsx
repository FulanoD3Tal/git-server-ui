'use client';
import { useTheme } from '@/theme/infrastructure/hooks/use-theme';
import React from 'react';
import { ThemeIconButton } from '../molecules/theme-icon-btn/theme-icon-btn';

export const Header = () => {
  const { theme, toggleSwitch } = useTheme();
  return (
    <header className='p-1 flex justify-end max-w-7xl mx-auto'>
      <ThemeIconButton theme={theme} onSwitch={toggleSwitch} />
    </header>
  );
};
