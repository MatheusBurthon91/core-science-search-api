import React from 'react';
import '../App.css';
import FormSearch from '../components/FormSearch';
import SearchData from '../components/SearchData';

export default function Home() {
  return (
    <main>
      <FormSearch />
      <SearchData />
    </main>
  );
}
