import type { Meta, StoryObj } from '@storybook/react';

import { RepositoryItem } from './repository-item';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type CompType = typeof RepositoryItem;

const queryClient = new QueryClient();

const meta: Meta<CompType> = {
  title: '01-atoms/common/repository-item',
  component: RepositoryItem,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div role='list'>
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {
    name: 'my first repository',
    lastUpdated: new Date('01/01/2023'),
  },
};
export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};
