import React from 'react';
import NavBar from '../components/NavBar';
import ShowHistorySearch from '../components/ShowHistorySearch';

export default function HistorySearch() {
  return (
    <main>
      historico de pesquisas.
      <NavBar barValue={2} />
      <ShowHistorySearch />
    </main>
  );
}
