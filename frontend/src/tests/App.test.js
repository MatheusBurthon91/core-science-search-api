import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import GlobalProvider from '../context/GlobalProvider';
import '@testing-library/jest-dom';

test('deve renderizar o componente App', () => {
  renderWithRouter(
    <GlobalProvider>
      <App />
    </GlobalProvider>,
  );

  const homeTitle = screen.getByText(/Ache artigos cientificos/i);
  expect(homeTitle).toBeInTheDocument();
});
