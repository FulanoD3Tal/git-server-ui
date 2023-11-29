import { describe, it, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary } from './searchbar.stories';

describe('<SearchBar/>', () => {
  afterEach(cleanup);
  beforeEach(() => {
    vi.mock('next/navigation', async () => {
      const actual: Object = await vi.importActual('next/navigation');
      return {
        ...actual,
        useRouter: () => ({ replace: vi.fn() }),
        useSearchParams: () => ({ get: vi.fn() }),
      };
    });
  });
  it('should render correctly', () => {
    const SearchBarPrimary = composeStory(Primary, meta);
    render(<SearchBarPrimary />);
    screen.getByRole('textbox', { name: Primary.args?.textBoxProps?.label });
  });
});
