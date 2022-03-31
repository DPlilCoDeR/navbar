import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => render(<App/>))

describe('App component', () => {
  it('render heading', () => {
    let headingElement = screen.queryByRole('heading');
    expect(headingElement).not.toBeInTheDocument();
  })
  

  it('have navbar component', ()=>{
    const navBarComponent = screen.getByText(/navbar/i)
    expect(navBarComponent).toBeInTheDocument()
  })
});
