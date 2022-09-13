import React from 'react';
import {
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function ShowHistorySearch() {
  const getSearch = JSON.parse(localStorage.getItem('search'));

  return (
    <Grid container justifyContent="center" sx={{ backgroundColor: '#AFB4FF' }}>
      {!getSearch ? <h1>Não existe historico de pesquisas</h1> : (
        <TableContainer component={Paper}>
          <Table sx={{ backgroundColor: '#AFB4FF' }} size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">Pesquisa</TableCell>
                <TableCell align="center">Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getSearch.map((search) => (
                <TableRow key={Math.random()}>
                  <TableCell align="center">{search[0]}</TableCell>
                  <TableCell align="center">{search[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
}
