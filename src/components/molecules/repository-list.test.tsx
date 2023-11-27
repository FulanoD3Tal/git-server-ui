import { describe, it, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary, Empty } from './repository-list.stories';

describe('<RepositoryList/>', () => {
  afterEach(cleanup);
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
