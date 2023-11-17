import { describe, it, expect, afterEach } from 'vitest';
import { LocalStorageThemeSwitcher } from './local-storage-theme-saver';

describe('LocalStorageThemeSaver', () => {
  afterEach(() => localStorage.removeItem('git-server-ui-theme'));
  const themeSaver = new LocalStorageThemeSwitcher();
  it('should save to localStorage the current theme', () => {
    expect(themeSaver.switch('light')).toBe('light');
    expect(localStorage.getItem('git-server-ui-theme')).toBe('light');
  });
  it('should load theme from the localStorage', () => {
    localStorage.setItem('git-server-ui-theme', 'test');
    expect(themeSaver.load()).toBe('test');
  });
  it('should load default theme if not set', () => {
    // localStorage.setItem('git-server-ui-theme', 'test');
    expect(themeSaver.load()).toBe('light');
    expect(localStorage.getItem('git-server-ui-theme')).toBe('light');
  });
});
