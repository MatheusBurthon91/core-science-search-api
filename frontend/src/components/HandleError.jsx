import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function HandleError() {
  return (
    <Grid container justifyContent="center" sx={{ backgroundColor: '#607EAA' }}>
      <Typography sx={{ fontSize: '30px' }} variant="h1" component="div" gutterBottom>
        infelizmente o dado não encrontrado, por favor pesquise novamente.
      </Typography>
    </Grid>
  );
}
