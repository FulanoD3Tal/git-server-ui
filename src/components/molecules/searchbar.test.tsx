import { describe, it, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary, WithError } from './searchbar.stories';

describe('<SearchBar/>', () => {
  afterEach(cleanup);
  it('should render correctly', () => {
    const SearchBarPrimary = composeStory(Primary, meta);
    render(<SearchBarPrimary />);
    screen.getByRole('textbox', { name: Primary.args?.textBoxProps?.label });
  });
  it('should render a error message', () => {
    const SearchBarWithError = composeStory(WithError, meta);
    render(<SearchBarWithError />);
    screen.getByText(WithError?.args?.hintText as string);
  });
});
