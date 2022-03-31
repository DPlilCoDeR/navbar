import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';



describe('Navbar component', () => {
  it('have nav-header', ()=>{
    render(<Navbar/>)
    const header = screen.getByText(/header/i)
    expect(header).toBeInTheDocument();
  })

  it('have a nav-toggle', () => {
    render(<Navbar/>)
    const toggle = screen.getByText(/toggle/i)
    expect(toggle).toBeInTheDocument();
  })
});