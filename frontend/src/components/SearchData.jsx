import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Loading from './Loading';

export default function SearchData() {
  const { responseApi, loading } = useContext(GlobalContext);

  return (
    <section>
      {loading ? (<Loading />) : responseApi.map((res) => (
        <div key={res._id}>
          <h3>{`Autores: ${res._source.authors.join(' | ')}`}</h3>
          <p>{`tipo de dado: ${res._type}`}</p>
          <p>{`titulo do artigo: ${res._source.title}`}</p>
          <p>{`descrição do artigo: ${res._source.description}`}</p>
          <div>
            {
              res._source.urls.map((url, index) => (
                <ul key={`${Math.random()} ${url}`}>
                  <li>
                    link da pesquisa:
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {` link: ${index + 1}`}
                    </a>
                  </li>
                </ul>
              ))
            }
          </div>
        </div>
      ))}
    </section>
  );
}
