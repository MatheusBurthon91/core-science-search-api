import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <h1>Você se perdeu retorne para a pagina inicial.</h1>
      <Link to="/">Inicio</Link>
    </main>
  );
}
