import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pierce\'s name', () => {
  render(<App />);
  const name = screen.getByText(/Pierce Harriz/i);
  expect(name).toBeInTheDocument();
});
