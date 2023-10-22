import type { Meta, StoryObj } from '@storybook/react';

import { TextBox } from './textbox';

type CompType = typeof TextBox;

const meta: Meta<CompType> = {
  component: TextBox,
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {
    label: 'testing...',
  },
};
