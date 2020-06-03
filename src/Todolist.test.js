import React from 'react';
import { render } from '@testing-library/react';
import Todolist from './Todolist';

test('renders learn react link', () => {
  const { getByText } = render(<Todolist />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
