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
  { name: 'First Repository', lastUpdated: 'yesterday' },
  { name: 'Second Repository', lastUpdated: 'last day' },
  { name: 'Third Repository', lastUpdated: '27-11-202*' },
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
