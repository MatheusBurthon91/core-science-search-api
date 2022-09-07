import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import GlobalContext from '../context/GlobalContext';
import HandleError from './HandleError';
import Loading from './Loading';
import ShowItens from './ShowItens';

export default function SearchData() {
  const { responseApi, loading } = useContext(GlobalContext);

  return (
    <Grid>
      {loading && (<Loading />)}
      {!responseApi ? (<HandleError />) : responseApi.map((res, ind) => (
        <ShowItens key={res._id} res={res} ind={ind} />
      ))}
    </Grid>
  );
}
