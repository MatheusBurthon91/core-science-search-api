import { Grid } from '@mui/material';
import React from 'react';

export default function ShowHistorySearch() {
  const Getsearch = JSON.parse(localStorage.getItem('search'));

  return (
    <Grid container justifyContent="center" sx={{ backgroundColor: '#AFB4FF' }}>
      <table>
        <thead>
          <td>Pesquisa</td>
        </thead>
        <tbody>
          {Getsearch.map((search) => (
            <tr key={Math.random()}>{search}</tr>
          ))}
        </tbody>
      </table>
    </Grid>
  );
}
