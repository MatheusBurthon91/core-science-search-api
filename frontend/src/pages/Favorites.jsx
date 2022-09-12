import React from 'react';
import GetFavorites from '../components/getFavorites';
import NavBar from '../components/NavBar';

export default function Favorites() {
  return (
    <main>
      <h1 data-testid="favorite-title">listagem de favoritos.</h1>
      <NavBar barValue={1} />
      <GetFavorites />
    </main>
  );
}
