import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Dropdown } from '..';

describe('Dropdown', () => {
  test('should render', async () => {
    render(<Dropdown button={<button />} children={<div />} />);

    console.log(321, await screen.findByTestId('dropdown'));
    // expect(wrapper).toBeDefined();
    // expect(wrapper.find('#button')).toBeDefined();
    // expect(wrapper.find('#div')).toBeDefined();
  });
});
