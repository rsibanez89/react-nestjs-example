import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders users table', () => {
  render(<App />);
  const linkElement = screen.getByText(/Administracion de usuarios/i);
  expect(linkElement).toBeInTheDocument();
});
