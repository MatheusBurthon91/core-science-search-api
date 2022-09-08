import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

test('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: /Ache artigos cientificos./i,
  });
  expect(homeTitle).toBeInTheDocument();
});
