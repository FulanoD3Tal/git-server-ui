import { describe, it, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Primary, WithError } from './config-field.stories';

describe('<ConfigField/>', () => {
  afterEach(cleanup);
  it('should render correctly', () => {
    const ConfigFieldPrimary = composeStory(Primary, meta);
    render(<ConfigFieldPrimary />);
    screen.getByRole('textbox', { name: Primary.args?.label });
  });
  it('should render and error message', () => {
    const ConfigFieldWithError = composeStory(WithError, meta);
    render(<ConfigFieldWithError />);
    screen.getByRole('alert');
  });
});
