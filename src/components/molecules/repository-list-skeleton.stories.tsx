import type { Meta, StoryObj } from '@storybook/react';

import { RepositoryListSkeleton } from './repository-list-skeleton';

type CompType = typeof RepositoryListSkeleton;

const meta: Meta<CompType> = {
  title: '02-molecules/common/RepositoryListSkeleton',
  component: RepositoryListSkeleton,
};

export default meta;
type Story = StoryObj<CompType>;

export const Primary: Story = {
  args: {},
};
