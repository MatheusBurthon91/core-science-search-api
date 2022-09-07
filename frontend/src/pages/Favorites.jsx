import React from 'react';
import GetFavorites from '../components/getFavorites';
import NavBar from '../components/NavBar';

export default function Favorites() {
  return (
    <main>
      listagem de favoritos.
      <NavBar />
      <GetFavorites />
    </main>
  );
}
