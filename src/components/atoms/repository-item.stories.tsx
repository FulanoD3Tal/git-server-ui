import type { Meta, StoryObj } from '@storybook/react';

import { RepositoryItem } from './repository-item';

type CompType = typeof RepositoryItem;

const meta: Meta<CompType> = {
  title: '01-atoms/common/repository-item',
  component: RepositoryItem,
  decorators: [
    (Story) => (
      <div role='list'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {
    name: 'my first repository',
    lastUpdated: new Date('01/01/2023').toISOString(),
  },
};
export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};
