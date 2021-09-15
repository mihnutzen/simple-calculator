import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Numbers from './Numbers';

describe('The Numbers component', () => {
  it('should render correctly', () => {
    const onNumberMock = jest.fn();

    const { asFragment } = render(<Numbers onNumber={onNumberMock} />);
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot();
  });

  it('should trigger onNumber with payload', () => {
    const onNumberMock = jest.fn();

    const { getByText } = render(<Numbers onNumber={onNumberMock} />);

    fireEvent.click(getByText(/1/))

    expect(onNumberMock).toHaveBeenCalledWith(1);
  });
});
