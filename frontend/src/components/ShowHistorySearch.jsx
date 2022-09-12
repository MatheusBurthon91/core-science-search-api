import { Grid } from '@mui/material';
import React from 'react';

export default function ShowHistorySearch() {
  const Getsearch = JSON.parse(localStorage.getItem('search'));

  return (
    <Grid container justifyContent="center" sx={{ backgroundColor: '#AFB4FF' }}>
      <ul>
        {Getsearch.map((search) => (
          <li key={Math.random()}>{search}</li>
        ))}
      </ul>
    </Grid>
  );
}
