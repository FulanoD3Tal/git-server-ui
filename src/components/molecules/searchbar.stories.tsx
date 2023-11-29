import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from './searchbar';

type CompType = typeof SearchBar;

const meta: Meta<CompType> = {
  component: SearchBar,
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {
    textBoxProps: { label: 'Search...' },
  },
};
