import PropTypes from 'prop-types';
import React from 'react';
import {
  Grid, Typography, ListItemButton, List, ListItem, Button,
} from '@mui/material';
import saveHistorySearch from '../helpers';

export default function ShowItens({ res, ind }) {
  return (
    <Grid key={res._id} id={ind + res._id} container justifyContent="center" alignItems="center" sx={{ backgroundColor: '#E1FFEE' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: 25, color: 'blue' }} variant="h1" component="div" gutterBottom>
          <Typography sx={{ fontSize: 25, fontWeight: 'bold' }} variant="span">
            Autores:
          </Typography>
          {` ${res._source.authors.join(' | ')}`}
        </Typography>

      </Grid>
      <Typography sx={{ fontSize: 19 }} variant="h2" gutterBottom>
        <Typography sx={{ fontSize: 19, fontWeight: 'bold' }} variant="span">
          titulo do artigo:
        </Typography>
        {` ${res._source.title}`}
      </Typography>
      <Typography sx={{ fontSize: 17 }} variant="h3" component="div" gutterBottom>
        <Typography sx={{ fontSize: 17, fontWeight: 'bold' }} variant="span">
          tipo de dado:
        </Typography>
        {` ${res._type}`}
      </Typography>
      <p>
        {
            !res._source.description ? (
              <Typography sx={{ fontSize: 17 }} variant="h3" component="div" gutterBottom>
                <Typography sx={{ fontSize: 17, fontWeight: 'bold' }} variant="span">
                  descrição do artigo:
                </Typography>
                {' sem decrição'}
              </Typography>
            ) : (
              <Typography sx={{ fontSize: 17 }} variant="h3" component="div" gutterBottom>
                <Typography sx={{ fontSize: 17, fontWeight: 'bold' }} variant="span">
                  descrição do artigo:
                </Typography>
                {` ${res._source.description}`}
              </Typography>
            )
        }
      </p>
      <Grid container justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center">
          <Typography sx={{ fontSize: 17, fontWeight: 'bold' }} variant="h3" component="div" gutterBottom>
            mais informações:
          </Typography>
        </Grid>
        { !res._source.urls.length ? <p>sem links</p>
          : res._source.urls.map((url, index) => (
            <List key={Math.random()}>
              <ListItem disablePadding>
                <Grid
                  container
                  item
                  xs={5}
                  md={3}
                  direction="column"
                >
                  <Button variant="contained" color="success" size="small">
                    <ListItemButton
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                      alignItens
                    >
                      <Typography sx={{ fontSize: 10 }} variant="span" component="div">
                        {` link: ${index + 1}`}
                      </Typography>
                    </ListItemButton>
                  </Button>
                </Grid>
              </ListItem>
            </List>
          ))}
      </Grid>
      <Button
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
        size="small"
        variant="contained"
      >
        favoritar/desfavoritar
      </Button>
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
