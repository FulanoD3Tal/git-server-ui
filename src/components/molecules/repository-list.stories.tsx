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

const items: Repository[] = [
  {
    uuid: '',
    name: 'First Repository',
    path: '',
    lastUpdated: new Date('01/01/2023'),
    createdAt: new Date('01/01/2023'),
  },
  {
    uuid: '',
    name: 'Second Repository',
    path: '',
    lastUpdated: new Date('02/01/2023'),
    createdAt: new Date('01/01/2023'),
  },
  {
    uuid: '',
    name: 'Third Repository',
    path: '',
    lastUpdated: new Date('03/01/2023'),
    createdAt: new Date('01/01/2023'),
  },
];

export const Primary: Story = {
  args: {
    items,
  },
};

export const Empty: Story = {
  args: {
    items: [],
    emptyMessage: 'No repositories',
  },
};
