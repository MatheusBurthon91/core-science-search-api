import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Typography } from '@mui/material';
import saveHistorySearch from '../helpers';

export default function ShowItens({ res, ind }) {
  return (
    <Grid key={res._id} id={ind + res._id}>
      <Typography sx={{ fontSize: 20, color: 'blue' }} color="text.secondary" variant="h1" component="div">
        {`Autores: ${res._source.authors.join(' | ')}`}
      </Typography>
      <p>{`tipo de dado: ${res._type}`}</p>
      <p>{`titulo do artigo: ${res._source.title}`}</p>
      <p>
        {
            !res._source.description ? 'descrição do artigo: sem decrição' : `descrição do artigo: ${res._source.description}`
          }
      </p>
      <Grid>
        {
              res._source.urls.map((url, index) => (
                <ul key={Math.random()}>
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
      </Grid>
      <button
        type="button"
        onClick={() => {
          const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          const findSomeFavorite = favorites.some((favorite) => favorite._id === res._id);
          if (findSomeFavorite) {
            const filteredFavorites = favorites.filter(({ _id }) => _id !== res._id);
            localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
          } else {
            saveHistorySearch('favorites', res);
          }
        }}
      >
        favoritar/desfavoritar
      </button>
    </Grid>
  );
}

ShowItens.propTypes = {
  ind: PropTypes.number.isRequired,
  res: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    _source: PropTypes.shape({
      authors: PropTypes.arrayOf(
        PropTypes.string,
      ).isRequired,
      description: PropTypes.string,
      title: PropTypes.string.isRequired,
      urls: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ),
    }),
    _type: PropTypes.string.isRequired,
  }).isRequired,
};
