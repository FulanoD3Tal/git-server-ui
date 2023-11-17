import { ThemeSaver } from '../application/theme-saver';
import { LocalStorageThemeSwitcher } from './local-storage-theme-saver';

const inMemoryThemeSwitcher = new LocalStorageThemeSwitcher();

export const themeController = new ThemeSaver(inMemoryThemeSwitcher);
