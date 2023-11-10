import type { Meta, StoryObj } from '@storybook/react';

import { ConfigField } from './config-field';

type CompType = typeof ConfigField;

const meta: Meta<CompType> = {
  title: '02-molecules/common/ConfigField',
  component: ConfigField,
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {
    label: 'My configuration field',
  },
};
