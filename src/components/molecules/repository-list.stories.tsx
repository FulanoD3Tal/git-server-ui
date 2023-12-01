import type { Meta, StoryObj } from '@storybook/react';

import { RepositoryList } from './repository-list';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type CompType = typeof RepositoryList;

const queryClient = new QueryClient();

const meta: Meta<CompType> = {
  title: '02-molecules/common/repository-list',
  component: RepositoryList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {};

export const Empty: Story = {
  args: {
    emptyMessage: 'No repositories',
  },
};
