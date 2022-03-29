import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crash', () => {
  render(<App />);
  let firstElement = screen.getByRole('h2');
  expect(firstElement).toBeInTheDocument();
});
