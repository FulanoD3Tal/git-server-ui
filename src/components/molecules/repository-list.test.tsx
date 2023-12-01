import { describe, it, afterEach, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary, Empty } from './repository-list.stories';
import {
  useRepoMutation,
  useRepoQuery,
} from '@/dashboard/infrastructure/hooks/use-repo';

vi.mock('@/dashboard/infrastructure/hooks/use-repo');

const items: Repository[] = [
  {
    uuid: '1',
    name: 'First Repository',
    path: '',
    lastUpdated: new Date('01/01/2023'),
    createdAt: new Date('01/01/2023'),
  },
  {
    uuid: '2',
    name: 'Second Repository',
    path: '',
    lastUpdated: new Date('02/01/2023'),
    createdAt: new Date('01/01/2023'),
  },
  {
    uuid: '3',
    name: 'Third Repository',
    path: '',
    lastUpdated: new Date('03/01/2023'),
    createdAt: new Date('01/01/2023'),
  },
];

describe('<RepositoryList/>', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });
  beforeEach(() => {
    vi.mocked(useRepoQuery).mockReturnValue({
      isLoading: false,
      repos: items,
    });
    vi.mocked(useRepoMutation).mockReturnValue({
      delRepo: vi.fn(),
      createRepo: vi.fn(),
      isDeleting: false,
      isPending: false,
    });
  });
  it('should render all items', () => {
    const RepositoryListPrimary = composeStory(Primary, meta);
    render(<RepositoryListPrimary />);
    items.forEach((item) => {
      screen.getByText(item.name);
    });
  });
  it('should render empty message', () => {
    vi.mocked(useRepoQuery).mockReturnValue({
      isLoading: false,
      repos: [],
    });
    const RepositoryListEmpty = composeStory(Empty, meta);
    render(<RepositoryListEmpty />);
    screen.getByText(Empty?.args?.emptyMessage as string);
  });
});
