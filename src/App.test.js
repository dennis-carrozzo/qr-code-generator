import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
  render(<App />);
  const linkElement = screen.getByText(/qr code generator/i);
  expect(linkElement).toBeInTheDocument();
});
