import type { Meta, StoryObj } from '@storybook/react';

import { ConfigForm } from './config-form';

type CompType = typeof ConfigForm;

const meta: Meta<CompType> = {
  title: '03-organisms/config/ConfigForm',
  component: ConfigForm,
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {},
};
export const WithData: Story = {
  args: {
    previousData: { rootPath: 'testing', defaultBranch: 'testing' },
  },
};
export const Loading: Story = {
  args: {
    ...WithData.args,
    loading: true,
  },
};
