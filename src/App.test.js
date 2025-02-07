import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/Little Lemon/i); // cibler le texte de l'attribut alt de l'image
expect(logoElement).toBeInTheDocument();

});

