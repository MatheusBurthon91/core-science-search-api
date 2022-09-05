import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function SearchData() {
  const { responseApi } = useContext(GlobalContext);

  return (
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
  );
}
