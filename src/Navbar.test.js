import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders App without crash', () => {
    render(<Navbar />);
  });