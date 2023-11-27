import type { Meta, StoryObj } from '@storybook/react';

import { RepositoryList } from './repository-list';

type CompType = typeof RepositoryList;

const meta: Meta<CompType> = {
  title: '02-molecules/common/repository-list',
  component: RepositoryList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CompType>;

const items: Repository[] = [
  {
    uuid: '',
    name: 'First Repository',
    path: '',
    lastUpdated: 'yesterday',
    createdAt: '',
  },
  {
    uuid: '',
    name: 'First Repository',
    path: '',
    lastUpdated: 'last day',
    createdAt: '',
  },
  {
    uuid: '',
    name: 'First Repository',
    path: '',
    lastUpdated: '27-11-202*',
    createdAt: '',
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
