import React, {
  useContext, useRef, useEffect, /* useState, */
} from 'react';
import { Typography, Input, Button } from '@mui/material';
import getInfomationsApi from '../services';
import GlobalContext from '../context/GlobalContext';
import StyleForm from '../styles/styleForm';

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

  const saveHistorySearch = () => {
    const getSearch = JSON.parse(localStorage.getItem('search'));
    if (getSearch) {
      localStorage.setItem('search', JSON.stringify([...getSearch, search]));
    } else {
      localStorage.setItem('search', JSON.stringify([search]));
    }
  };

  const searchScienceArticles = async (searchValue) => {
    try {
      setLoading(true);
      setResponseApi([]);
      const data = await getInfomationsApi(searchValue);
      saveHistorySearch();
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
      <section>
        <Input
          id="outlined-basic"
          inputRef={ref}
          variant="outlined"
          placeholder="ache seu artigo"
          onChange={({ target }) => setSearch(target.value)}
          size="small"
          type="search"
        />
        <Button
          variant="contained"
          onClick={() => searchScienceArticles(search)}
          disabled={disableButton}
          size="small"
        >
          achar artigo
        </Button>
      </section>
    </StyleForm>
  );
}
