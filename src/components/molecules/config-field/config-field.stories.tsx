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
  tags: ['autodocs'],
};
export const WithError: Story = {
  args: {
    ...Primary.args,
    error: true,
    hitText: 'This is an error',
  },
};
export const Disabled: Story = {
  args: {
    ...Primary.args,
    textBoxProps: { value: 'testing', label: 'testing' },
    disabled: true,
  },
};
