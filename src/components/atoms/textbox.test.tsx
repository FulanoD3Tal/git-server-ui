import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary } from './textbox.stories';

describe('<TextBox/>', () => {
  it('should render correctly', async () => {
    const TextBoxPrimary = composeStory(Primary, meta);
    render(<TextBoxPrimary />);
    await screen.getByRole('textbox', { name: Primary.args?.label });
  });
});
