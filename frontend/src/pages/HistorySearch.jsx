import { Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../components/NavBar';
import ShowHistorySearch from '../components/ShowHistorySearch';

export default function HistorySearch() {
  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center" sx={{ backgroundColor: '#607EAA' }}>
        <Typography variant="h1" component="div" gutterBottom>
          Histórico de pesquisas.
        </Typography>
      </Grid>
      <NavBar barValue={2} />
      <ShowHistorySearch />
    </Grid>
  );
}
