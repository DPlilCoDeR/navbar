import { render, screen } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  it('render heading', () => {
    render(<App/>)
    let headingElement = screen.getByText(/navbar project setup/i);
    expect(headingElement).toBeInTheDocument();
  })
  

  it('have navbar component', ()=>{
    render(<App/>)
    const navBarComponent = screen.getByRole(/nav/i)
    expect(navBarComponent).toBeInTheDocument()
  })
});
