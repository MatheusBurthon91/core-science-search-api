import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Loading() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Typography sx={{ color: 'gray' }} variant="h1" component="div" gutterBottom>
        Carregamento em progresso...
      </Typography>
    </Grid>
  );
}
