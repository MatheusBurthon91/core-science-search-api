import React, { useContext } from 'react';
import './App.css';
import FormSearch from './components/FormSearch';
import GlobalContext from './context/GlobalContext';

function App() {
  const { responseApi } = useContext(GlobalContext);

  return (
    <div className="App">
      <h1>Aplicação para mostrar pesquisas cientificas.</h1>
      <FormSearch />
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
