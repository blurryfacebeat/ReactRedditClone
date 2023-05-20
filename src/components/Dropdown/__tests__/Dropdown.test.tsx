import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Dropdown } from '..';

describe('Dropdown', () => {
  test('should render', async () => {
    render(
      <Dropdown button={<button data-testid={'button'} />}>
        <div data-testid={'list'} />
      </Dropdown>,
    );

    expect(await screen.findByTestId('dropdown')).toBeInTheDocument();
    expect(await screen.findByTestId('button')).toBeInTheDocument();
  });

  test('list should render after click', async () => {
    render(
      <Dropdown button={<button data-testid={'button'} />}>
        <div data-testid={'list'} />
      </Dropdown>,
    );

    const user = userEvent.setup();

    await user.click(await screen.findByTestId('dropdownActiveButton'));

    expect(await screen.findByTestId('list')).toBeInTheDocument();
  });
});
