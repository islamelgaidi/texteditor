import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Word Count Application', () => {
  render(<App />);
  const element = screen.getByText(/Word Count Application/i);
  expect(element).toBeInTheDocument();
});
