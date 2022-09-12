import React from 'react';
import { Grid } from '@mui/material';

export default function ShowHistorySearch() {
  const getSearch = JSON.parse(localStorage.getItem('search'));

  return (
    <Grid container justifyContent="center" sx={{ backgroundColor: '#AFB4FF' }}>
      {!getSearch ? <h1>Não existe historico de pesquisas</h1> : (
        <table>
          <thead>
            <th>Pesquisa</th>
            <th>Data</th>
          </thead>
          <tbody>
            {getSearch.map((search) => (
              <tr key={Math.random()}>
                <td>{search[0]}</td>
                <td>{search[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Grid>
  );
}
