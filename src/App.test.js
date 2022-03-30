import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crash', () => {
  render(<App />);
  let headingElement = screen.getAllByRole('heading');
  console.log(headingElement)
  expect(headingElement).toBeInTheDocument();
});
