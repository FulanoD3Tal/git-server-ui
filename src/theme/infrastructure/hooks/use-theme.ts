import { useEffect, useState } from 'react';
import { themeController } from '../theme-controller';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const prevTheme = themeController.loadTheme();
    if (prevTheme === 'dark') document.documentElement.classList.add('dark');
    setTheme(prevTheme);
    return () => {};
  }, []);

  const toggleSwitch = () => {
    if (theme === 'dark') {
      themeController.saveTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      themeController.saveTheme('dark');
      document.documentElement.classList.add('dark');
    }
    setTheme(themeController.loadTheme());
  };

  return { theme, toggleSwitch };
};
