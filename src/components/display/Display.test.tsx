import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('The Display component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Display />);
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot();
  });

});
