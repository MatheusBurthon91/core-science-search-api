import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <section>
      <h3>Acesse os links que quiser</h3>
      <Link to="/">Home</Link>
      <Link to="favorites">Favoritos</Link>
      <Link to="search_history">Historico de pesquisas</Link>
    </section>
  );
}
