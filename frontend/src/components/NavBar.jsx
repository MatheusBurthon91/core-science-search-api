import { Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
// import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Grid sx={{ backgroundColor: '#7FBCD2' }} container justifyContent="center" alignItems="center">
      <Tabs>
        <Tab label="Home" href="/" />
        <Tab label="Favoritos" href="/favorites" />
        <Tab label="Historico de favoritos" href="/search_history" />
      </Tabs>
    </Grid>
  );
}
