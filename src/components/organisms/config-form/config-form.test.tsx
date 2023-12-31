import { describe, it, afterEach, vi, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStory } from '@storybook/react';
import meta, { Primary, Loading } from './config-form.stories';

describe('<ConfigForm/>', () => {
  const fields = ['Root path', 'Default branch'];
  afterEach(cleanup);
  it('should render correctly', async () => {
    const ConfigFormPrimary = composeStory(Primary, meta);
    render(<ConfigFormPrimary />);
    await screen.findByRole('textbox', { name: fields[0] });
    await screen.findByRole('textbox', { name: fields[1] });
  });

  it('should trigger the callback function when save the config', async () => {
    const mockCallBack = vi.fn();
    const user = userEvent.setup();

    const ConfigFormPrimary = composeStory(Primary, meta);
    render(<ConfigFormPrimary onSave={mockCallBack} />);

    const field1 = await screen.findByRole('textbox', { name: fields[0] });
    const field2 = await screen.findByRole('textbox', { name: fields[1] });
    const button = await screen.getByRole('button');

    const data: Config = {
      rootPath: 'field1',
      defaultBranch: 'field2',
      serverUrl: '',
    };

    await user.type(field1, data.rootPath);
    await user.type(field2, data.defaultBranch);
    await user.click(button);

    expect(mockCallBack).toHaveBeenCalledWith(data);
  });

  it('should reload default inputs values', async () => {
    const previousConfig: Config = {
      defaultBranch: 'foo',
      rootPath: 'bar',
      serverUrl: '',
    };
    const ConfigFormPrimary = composeStory(Primary, meta);
    render(<ConfigFormPrimary previousData={previousConfig} />);

    const field1 = await screen.findByRole<HTMLInputElement>('textbox', {
      name: fields[0],
    });
    const field2 = await screen.findByRole<HTMLInputElement>('textbox', {
      name: fields[1],
    });
    expect(field1.value).toBe(previousConfig.rootPath);
    expect(field2.value).toBe(previousConfig.defaultBranch);
  });
  it('should show error message when empty fields', async () => {
    const user = userEvent.setup();

    const ConfigFormPrimary = composeStory(Primary, meta);
    render(<ConfigFormPrimary />);

    const button = await screen.getByRole('button');
    await user.click(button);

    expect((await screen.findAllByRole('alert')).length).toBe(2);
  });
  it('should have loading state', async () => {
    const ConfigFormLoading = composeStory(Loading, meta);
    render(<ConfigFormLoading />);

    expect(screen.getByRole('button', { name: /saving/i }));
  });
});
