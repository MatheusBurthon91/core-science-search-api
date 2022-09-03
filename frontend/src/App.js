import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import env from 'react-dotenv';
// agora vamos testar se as api consegue retornar dados na aplicação

function App() {
  const [search, setSearch] = useState('');
  const [responseApi, setResponseApi] = useState([]);

  const searchScienceArticles = async (searchValue) => {
    const url = `https://core.ac.uk:443/api-v2/search/${searchValue}?page=1&pageSize=10&apiKey=${env.API_KEY}`;
    const request = await fetch(url);
    const { data } = await request.json();
    setResponseApi(data);
  };

  return (
    <div className="App">
      {window.console.log(responseApi)}
      <h1>Aplicação para mostrar pesquisas cientificas.</h1>
      <input
        type="text"
        placeholder="ache seu artigo"
        onChange={({ target }) => setSearch(target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => searchScienceArticles(search)}
      >
        Contained
      </Button>
    </div>
  );
}

export default App;
