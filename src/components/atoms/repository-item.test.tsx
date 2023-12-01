import { describe, it, afterEach, vi, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary } from './repository-item.stories';
import userEvent from '@testing-library/user-event';
import { useRepoMutation } from '@/dashboard/infrastructure/hooks/use-repo';

vi.mock('@/dashboard/infrastructure/hooks/use-repo');

describe('<RepositoryItem/>', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render correctly', () => {
    vi.mocked(useRepoMutation).mockReturnValue({
      delRepo: vi.fn(),
      createRepo: vi.fn(),
      isDeleting: false,
      isPending: false,
    });
    const RepoItemPrimary = composeStory(Primary, meta);
    render(<RepoItemPrimary />);
    screen.getByRole('listitem', { name: Primary?.args?.name });
    screen.getByText(Primary.args?.lastUpdated?.toString() as string, {
      exact: false,
    });
  });
  it('should trigger delete action', async () => {
    const delRepoMock = vi.fn();
    vi.mocked(useRepoMutation).mockReturnValue({
      delRepo: delRepoMock,
      createRepo: vi.fn(),
      isDeleting: false,
      isPending: false,
    });
    const user = userEvent.setup();
    const RepoItemPrimary = composeStory(Primary, meta);
    render(<RepoItemPrimary />);
    screen.getByRole('listitem', { name: Primary?.args?.name });
    const btn = screen.getByRole('button', { name: /delete/i });
    user.click(btn);
    const yesBtn = await screen.findByRole('button', { name: /yes/i });
    await screen.findByRole('button', { name: /no/i });
    await user.click(yesBtn);
    expect(delRepoMock).toHaveBeenCalledWith(Primary.args?.uuid);
  });
});
