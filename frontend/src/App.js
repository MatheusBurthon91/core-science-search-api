import { Typography } from '@mui/material';
import React from 'react';
import './App.css';
import FormSearch from './components/FormSearch';
import SearchData from './components/SearchData';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="div" gutterBottom>
        Aplicação para mostrar pesquisas cientificas.
      </Typography>
      <FormSearch />
      <SearchData />
    </div>

  );
}

export default App;
