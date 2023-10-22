import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary } from './textbox.stories';

describe('<TextBox/>', () => {
  it('should render correctly', () => {
    const TextBoxPrimary = composeStory(Primary, meta);
    render(<TextBoxPrimary />);
    screen.getByRole('textbox', { name: Primary.args?.label });
  });
});
