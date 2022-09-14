import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardContent, Grid } from '@mui/material';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';

export default function NotFound() {
  const history = useHistory();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      margin="10px 0px"
    >
      <Card>
        <CardContent sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Typography sx={{ fontSize: 25, color: 'blue' }} variant="h1" component="div">
            Você se perdeu retorne para a pagina inicial.
          </Typography>
          <DoNotStepIcon sx={{
            padding: '10px', fontSize: '100px',
          }}
          />
          <CardActions>
            <Button
              size="small"
              variant="contained"
              onClick={() => history.push('/')}
            >
              Home
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}
