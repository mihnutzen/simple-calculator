import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Calculator from './Calculator';

describe('The Calculator component', () => {
  it('should update value being displayed', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: /0/ }));
    fireEvent.click(screen.getByRole('button', { name: /1/ }));
    fireEvent.click(screen.getByRole('button', { name: /\./ }));
    fireEvent.click(screen.getByRole('button', { name: /2/ }));

    const displayElement = screen.getByText(/1.2/i);
    expect(displayElement).toBeInTheDocument();
  });

  it('should clear value being displayed', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: /1/ }));
    fireEvent.click(screen.getByRole('button', { name: /2/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Clear (Esc)' }));

    const displayElement = screen.getAllByText(/0/);

    expect(displayElement).toHaveLength(2); // display & number
  });

  it('should display calculation result', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: /1/ }));
    fireEvent.click(screen.getByRole('button', { name: /0/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Add (or press +)' }));
    fireEvent.click(screen.getByRole('button', { name: /2/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Equal (or press Return)' }));

    const displayElement = screen.getByText(/12/);

    expect(displayElement).toBeInTheDocument();
  });

  it('should display calculation result when using different operations', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: /1/ }));
    fireEvent.click(screen.getByRole('button', { name: /0/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Add (or press +)' }));
    fireEvent.click(screen.getByRole('button', { name: /2/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Multiply (or press *)' }));
    fireEvent.click(screen.getByRole('button', { name: /2/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Add (or press +)' }));
    fireEvent.click(screen.getByRole('button', { name: /2/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Equal (or press Return)' }));

    const displayElement = screen.getByText(/16/);

    expect(displayElement).toBeInTheDocument();
  });

  it('should display calculation result when using keyboard', () => {
    render(<Calculator />);

    fireEvent.keyUp(document, {key: '2', code: 'Digit2'})
    fireEvent.keyUp(document, {key: '3', code: 'Digit3'})
    fireEvent.keyUp(document, {key: '*', code: 'Digit8', shiftKey: true })
    fireEvent.keyUp(document, {key: '2', code: 'Digit2'})
    fireEvent.keyUp(document, {key: '=', code: 'Equal'})

    const displayElement = screen.getByText(/46/);

    expect(displayElement).toBeInTheDocument();
  });
});
