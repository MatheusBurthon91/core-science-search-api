import React from 'react';
import { Grid } from '@mui/material';
import FormSearch from '../components/FormSearch';
import SearchData from '../components/SearchData';
import NavBar from '../components/NavBar';
import '../App.css';

export default function Home() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <FormSearch />
      <NavBar />
      <SearchData />
    </Grid>
  );
}
