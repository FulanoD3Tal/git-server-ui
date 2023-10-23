import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary } from './repository-item.stories';

describe('<RepositoryItem/>', () => {
  it('should render correctly', () => {
    const RepoItemPrimary = composeStory(Primary, meta);
    render(<RepoItemPrimary />);
    screen.getByRole('listitem', { name: Primary?.args?.name });
    screen.getByText(Primary.args?.lastUpdated as string, { exact: false });
  });
});
