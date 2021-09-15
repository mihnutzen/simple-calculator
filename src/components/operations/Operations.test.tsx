import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { OperationsList } from '../../types/calculator';

import Operations from './Operations';

describe('The Operations component', () => {
  it('should render correctly', () => {
    const operationMock = jest.fn();

    const { asFragment } = render(<Operations onOperation={operationMock} selectedOperation={OperationsList.Addition} />);
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot();
  });

  it('should trigger onOperation with payload', () => {
    const operationMock = jest.fn();

    const { getByText } = render(<Operations onOperation={operationMock} />);

    fireEvent.click(getByText(/-/))

    expect(operationMock).toHaveBeenCalledWith('subtract');
  });
});
