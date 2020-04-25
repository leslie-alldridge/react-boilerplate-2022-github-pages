import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders default CRA text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/and save to reload/i);
  expect(linkElement).toBeInTheDocument();
});
