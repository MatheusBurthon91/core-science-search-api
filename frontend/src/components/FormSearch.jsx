import React, {
  useContext, useRef, useEffect,
} from 'react';
import {
  Typography, Input, Button, Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import getInfomationsApi from '../services';
import GlobalContext from '../context/GlobalContext';
import StyleForm from '../styles/styleForm';
import saveHistorySearch from '../helpers';

export default function FormSearch() {
  const ref = useRef(null);

  const {
    search,
    setSearch,
    setResponseApi,
    setLoading,
    disableButton,
    setDisableButton,
  } = useContext(GlobalContext);

  const enableAndDisableButton = () => {
    if (search.length === 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  };

  useEffect(() => {
    enableAndDisableButton();
  }, [search, disableButton]);

  const searchScienceArticles = async (searchValue) => {
    try {
      setLoading(true);
      setResponseApi([]);
      const data = await getInfomationsApi(searchValue);
      const now = Date.now();
      saveHistorySearch('search', [search, now]);
      ref.current.value = '';
      setSearch('');
      setResponseApi(data);
      setLoading(false);
    } catch (error) {
      window.console.log(error);
    }
  };

  return (
    <StyleForm>
      <Typography variant="h1" component="div" gutterBottom>
        Ache artigos cientificos.
      </Typography>
      <Grid>
        <Input
          id="outlined-basic"
          inputRef={ref}
          variant="outlined"
          placeholder="ache seu artigo"
          onChange={({ target }) => setSearch(target.value)}
          size="small"
          type="search"
          data-testid="data-search"
          sx={{ backgroundColor: 'white', color: '#31087B' }}
        />
        <Button
          variant="contained"
          onClick={() => searchScienceArticles(search)}
          disabled={disableButton}
          size="small"
        >
          <SearchIcon />
        </Button>
      </Grid>
    </StyleForm>
  );
}
