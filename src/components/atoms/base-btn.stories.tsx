import type { Meta, StoryObj } from '@storybook/react';

import { BaseButton } from './base-btn';

type CompType = typeof BaseButton;

const meta: Meta<CompType> = {
  title: '01-atoms/common/BaseButton',
  component: BaseButton,
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {
    children: 'base button',
  },
};
export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};
export const Secondary: Story = {
  args: {
    ...Primary.args,
    btnType: 'secondary',
  },
};
export const SecondaryDisabled: Story = {
  args: {
    ...Secondary.args,
    disabled: true,
  },
};
