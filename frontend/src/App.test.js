import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Start working here text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Start working here/i);
  expect(linkElement).toBeInTheDocument();
});
