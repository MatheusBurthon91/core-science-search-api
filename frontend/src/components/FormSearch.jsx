import React, { useContext, useRef } from 'react';
import Button from '@mui/material/Button';
import getInfomationsApi from '../services';
import GlobalContext from '../context/GlobalContext';

export default function FormSearch() {
  const ref = useRef(null);

  const {
    search, setSearch, setResponseApi, setLoading, setErro,
  } = useContext(GlobalContext);

  const searchScienceArticles = async (searchValue) => {
    try {
      setErro(false);
      setLoading(true);
      const data = await getInfomationsApi(searchValue);
      ref.current.value = '';
      setSearch('');
      setResponseApi(data);
      setLoading(false);
    } catch (error) {
      if (error) {
        window.console.log(error);
        setErro(true);
      }
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
      >
        Contained
      </Button>
    </form>
  );
}
