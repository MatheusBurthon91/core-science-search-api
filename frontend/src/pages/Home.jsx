import React from 'react';
import FormSearch from '../components/FormSearch';
import SearchData from '../components/SearchData';
import NavBar from '../components/NavBar';
import '../App.css';

export default function Home() {
  return (
    <main className="App">
      <FormSearch />
      <NavBar />
      <SearchData />
    </main>
  );
}
