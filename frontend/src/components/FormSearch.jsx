import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import getInfomationsApi from '../services';
import GlobalContext from '../context/GlobalContext';

export default function FormSearch() {
  const {
    search, setSearch, setResponseApi,
  } = useContext(GlobalContext);

  const searchScienceArticles = async (searchValue) => {
    try {
      const data = await getInfomationsApi(searchValue);
      setResponseApi(data);
    } catch (error) {
      window.console.log(error);
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="ache seu artigo"
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
