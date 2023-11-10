import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary } from './config-field.stories';

describe('<ConfigField/>', () => {
  it('should render correctly', () => {
    const ConfigFieldPrimary = composeStory(Primary, meta);
    render(<ConfigFieldPrimary />);
    screen.getByRole('textbox', { name: Primary.args?.label });
  });
});
