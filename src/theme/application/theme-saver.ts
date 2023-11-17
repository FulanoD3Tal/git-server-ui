import { IThemeSwitcher } from '../domain/theme-switcher-interface';

export class ThemeSaver {
  constructor(private readonly themeSwitcher: IThemeSwitcher) {}

  /**
   * Save the current theme
   * @param theme
   * @returns
   */
  saveTheme(theme: Theme) {
    return this.themeSwitcher.switch(theme);
  }

  /**
   * Load the current theme or get default one ('light')
   * @returns the current theme
   */
  loadTheme() {
    return this.themeSwitcher.load();
  }
}
