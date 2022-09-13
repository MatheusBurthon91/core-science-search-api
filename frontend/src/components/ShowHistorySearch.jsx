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
  Typography,
} from '@mui/material';

export default function ShowHistorySearch() {
  const getSearch = JSON.parse(localStorage.getItem('search'));

  return (
    <Grid container justifyContent="center" sx={{ backgroundColor: '#AFB4FF' }}>
      {!getSearch ? (
        <Typography variant="h1" component="div" gutterBottom>
          Não existe historico de pesquisas
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ backgroundColor: '#AFB4FF', minWidth: 650 }} size="small">
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
