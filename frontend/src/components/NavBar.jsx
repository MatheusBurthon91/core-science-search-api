import {
  Grid, Tabs, Tab,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function NavBar({ barValue }) {
  const [value, setValue] = React.useState(barValue);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid sx={{ backgroundColor: '#7FBCD2' }} container justifyContent="center">
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <Tab label="Home" href="/" />
        <Tab label="Favoritos" href="/favorites" />
        <Tab label="Historico de favoritos" href="/search_history" />
      </Tabs>
    </Grid>
  );
}

NavBar.propTypes = {
  barValue: PropTypes.number.isRequired,
};
