import { IThemeSwitcher } from '../domain/theme-switcher-interface';

export class ThemeSaver {
  constructor(private readonly themeSwitcher: IThemeSwitcher) {}

  /**
   * Save the current theme
   * @param theme
   * @returns
   */
  async saveTheme(theme: Theme) {
    return this.themeSwitcher.switch(theme);
  }

  /**
   * Load the current theme or get default one ('light')
   * @returns the current theme
   */
  async loadTheme() {
    return this.themeSwitcher.load();
  }
}
