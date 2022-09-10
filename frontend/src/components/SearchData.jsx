import React, { useContext } from 'react';
import {
  Button, Card, CardActions, CardContent, Grid, Typography,
} from '@mui/material';
import GlobalContext from '../context/GlobalContext';
import HandleError from './HandleError';
import Loading from './Loading';
import ShowItens from './ShowItens';

export default function SearchData() {
  const { responseApi, loading } = useContext(GlobalContext);

  return (
    <Grid>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            a benevolent smile
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {loading && (<Loading />)}
      {!responseApi ? (<HandleError />) : responseApi.map((res, ind) => (
        <ShowItens key={res._id} res={res} ind={ind} />
      ))}
    </Grid>
  );
}
