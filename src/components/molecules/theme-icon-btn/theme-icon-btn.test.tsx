import { describe, it, afterEach, expect, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { LightMode, DarkMode } from './theme-icon-btn.stories';
import userEvent from '@testing-library/user-event';

describe('<ThemeIconButton/>', () => {
  afterEach(cleanup);
  it('should render correctly in light mode', async () => {
    const ThemeIconButtonPrimary = composeStory(LightMode, meta);
    render(<ThemeIconButtonPrimary />);
    screen.getByRole('button', { name: 'switch to dark mode' });
  });
  it('should render correctly in dark mode', async () => {
    const ThemeIconButtonPrimary = composeStory(DarkMode, meta);
    render(<ThemeIconButtonPrimary />);
    screen.getByRole('button', { name: 'switch to light mode' });
  });
  it('should trigger a callback when click it', async () => {
    const mockCallBack = vi.fn();
    const user = userEvent.setup();

    const ThemeIconButtonPrimary = composeStory(LightMode, meta);
    render(<ThemeIconButtonPrimary onSwitch={mockCallBack} />);
    const btn = screen.getByRole('button', { name: 'switch to dark mode' });

    await user.click(btn);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
