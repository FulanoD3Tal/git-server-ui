import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary } from './base-btn.stories';

describe('<IconButton/>', () => {
  it('should render correctly', async () => {
    const IconButtonPrimary = composeStory(Primary, meta);
    render(<IconButtonPrimary />);
    screen.getByRole('button');
  });
});
