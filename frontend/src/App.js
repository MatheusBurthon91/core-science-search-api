import React from 'react';
import './App.css';
import FormSearch from './components/FormSearch';
import SearchData from './components/SearchData';

function App() {
  return (
    <div className="App">
      <h1>Aplicação para mostrar pesquisas cientificas.</h1>
      <FormSearch />
      <SearchData />
    </div>

  );
}

export default App;
