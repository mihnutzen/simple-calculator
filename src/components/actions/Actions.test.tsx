import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Actions from './Actions';

describe('The Actions component', () => {
  it('should render correctly', () => {
    const actionMock = jest.fn();

    const { asFragment } = render(<Actions onAction={actionMock} />);
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot();
  });

  it('should trigger onAction with payload', () => {
    const actionMock = jest.fn();

    const { getByText } = render(<Actions onAction={actionMock} />);

    fireEvent.click(getByText(/AC/))

    expect(actionMock).toHaveBeenCalledWith('clear');
  });
});
