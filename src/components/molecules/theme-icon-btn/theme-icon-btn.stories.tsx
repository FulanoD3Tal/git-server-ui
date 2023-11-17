import type { Meta, StoryObj } from '@storybook/react';

import { ThemeIconButton } from './theme-icon-btn';

type CompType = typeof ThemeIconButton;

const meta: Meta<CompType> = {
  title: '02-molecules/common/ThemeIconButton',
  component: ThemeIconButton,
};

export default meta;
type Story = StoryObj<CompType>;

export const LightMode: Story = {
  args: {
    theme: 'light',
  },
};
export const DarkMode: Story = {
  args: {
    ...LightMode.args,
    theme: 'dark',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
