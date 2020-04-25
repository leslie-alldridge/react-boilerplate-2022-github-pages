import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

test('renders footer with text', () => {
  const { getByText } = render(<Footer name="Leslie Test" />);
  const linkElement = getByText(/Leslie Test/i);
  expect(linkElement).toBeInTheDocument();
});
