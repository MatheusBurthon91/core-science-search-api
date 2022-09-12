import React from 'react';
import { screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
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
    // expect(inputSearch).toHaveValue('');
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
    const linkFavorites = screen.getByRole('link', { name: /favoritos/i });
    expect(linkFavorites).toBeInTheDocument();
  });

  test('testando se o link "Historico de pesquisas", está na tela', () => {
    renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const linkHistorySearch = screen.getByRole('link', { name: /Historico de pesquisas/i });
    expect(linkHistorySearch).toBeInTheDocument();
  });

  test('testando link "Home" que quando ele for clicado vai para a rota "/"', () => {
    const { history } = renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const linkHome = screen.getByRole('link', { name: /Home/i });
    UserEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('testando link "Favoritos" que quando ele for clicado vai para a rota "/favorites"', () => {
    const { history } = renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const linkFavorites = screen.getByRole('link', { name: /favoritos/i });
    UserEvent.click(linkFavorites);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });

  test('testando link "Historico de pesquisas" que quando ele for clicado vai para a rota "/search_history"', () => {
    const { history } = renderWithRouter(
      <GlobalProvider>
        <App />
      </GlobalProvider>,
    );
    const linkSearchHistory = screen.getByRole('link', { name: /historico de pesquisas/i });
    UserEvent.click(linkSearchHistory);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/search_history');
  });
});
