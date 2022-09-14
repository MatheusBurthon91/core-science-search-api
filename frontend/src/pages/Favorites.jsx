import { Grid, Typography } from '@mui/material';
import React from 'react';
import GetFavorites from '../components/getFavorites';
import NavBar from '../components/NavBar';

export default function Favorites() {
  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center" sx={{ backgroundColor: '#607EAA' }}>
        <Typography variant="h1" component="div" gutterBottom data-testid="favorite-title">
          listagem de favoritos.
        </Typography>
      </Grid>
      <NavBar barValue={1} />
      <GetFavorites />
    </Grid>
  );
}
