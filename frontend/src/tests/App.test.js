import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import GlobalProvider from '../context/GlobalProvider';
import '@testing-library/jest-dom';

describe('deve renderizar o componente App', () => {
  test('testando se o titulo está na tela', () => {
    renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const homeTitle = screen.getByText(/Ache artigos cientificos/i);
    expect(homeTitle).toBeInTheDocument();
  });

  test('testando se o botão está na tela', () => {
    renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const buttonSearch = screen.getByRole('button', { name: /achar artigo/i });
    expect(buttonSearch).toBeInTheDocument();
  });

  test('testando se o input está na tela', () => {
    renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const inputSearch = screen.getByTestId('data-search');
    expect(inputSearch).toBeInTheDocument();
  });

  test('testando se o link "Home", está na tela', () => {
    renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
  });

  test('testando se o link "Favoritos", está na tela', () => {
    renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const linkHome = screen.getByRole('link', { name: /favoritos/i });
    expect(linkHome).toBeInTheDocument();
  });

  test('testando se o link "Historico de pesquisas", está na tela', () => {
    renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const linkHome = screen.getByRole('link', { name: /Historico de pesquisas/i });
    expect(linkHome).toBeInTheDocument();
  });
});
