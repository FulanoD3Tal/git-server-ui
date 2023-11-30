import { describe, it, afterEach, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary, Empty } from './repository-list.stories';
import { useRepo } from '@/dashboard/infrastructure/hooks/useRepo';

vi.mock('@/dashboard/infrastructure/hooks/useRepo');

describe('<RepositoryList/>', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });
  beforeEach(()=>{
    vi.mocked(useRepo).mockReturnValue({
      delRepo: vi.fn(),
      createRepo: vi.fn(),
      isDeleting: false,
      isPending: false,
    });
  });
  it('should render all items', () => {
    const RepositoryListPrimary = composeStory(Primary, meta);
    render(<RepositoryListPrimary />);
    Primary?.args?.items?.forEach((item) => {
      screen.getByText(item.name);
      screen.getByText(item.lastUpdated?.toISOString() as string);
    });
  });
  it('should render empty message', () => {
    const RepositoryListEmpty = composeStory(Empty, meta);
    render(<RepositoryListEmpty />);
    screen.getByText(Empty?.args?.emptyMessage as string);
  });
});
