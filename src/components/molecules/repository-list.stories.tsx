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
