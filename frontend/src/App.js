import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import env from 'react-dotenv';

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
      <section>
        {responseApi.map((res) => (
          <div key={res._id}>
            <h3>{`Autores: ${res._source.authors.join(' | ')}`}</h3>
            <p>{`tipo de dado: ${res._type}`}</p>
            <p>{`titulo do artigo: ${res._source.title}`}</p>
            <p>{`descrição do artigo: ${res._source.description}`}</p>
            <div>
              {
              res._source.urls.map((url, index) => (
                <ul>
                  <li>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {`link: ${index + 1}`}
                    </a>
                  </li>
                </ul>
              ))
            }
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
