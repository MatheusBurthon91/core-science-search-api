import React, { useContext, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import getInfomationsApi from '../services';
import GlobalContext from '../context/GlobalContext';

export default function FormSearch() {
  const ref = useRef(null);

  const {
    search, setSearch, setResponseApi, setLoading, disableButton, setDisableButton,
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
      ref.current.value = '';
      setSearch('');
      setResponseApi(data);
      setLoading(false);
    } catch (error) {
      window.console.log(error);
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="ache seu artigo"
        ref={ref}
        onChange={({ target }) => setSearch(target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => searchScienceArticles(search)}
        disabled={disableButton}
      >
        achar artigo
      </Button>
    </form>
  );
}
