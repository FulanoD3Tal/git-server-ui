import { IThemeSwitcher } from '../domain/theme-switcher-interface';

export class LocalStorageThemeSwitcher implements IThemeSwitcher {
  switch(theme: Theme) {
    if (!window === undefined)
      throw new Error('This method need to run on the browser');
    window.localStorage.setItem('git-server-ui-theme', theme);
    return theme;
  }
  load() {
    if (!window === undefined)
      throw new Error('This method need to run on the browser');
    const prevTheme = window.localStorage.getItem('git-server-ui-theme');
    if (typeof prevTheme === 'string') return prevTheme as Theme;
    window.localStorage.setItem('git-server-ui-theme', 'light');
    return 'light';
  }
}
