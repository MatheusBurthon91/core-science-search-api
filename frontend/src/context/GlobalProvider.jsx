import React, { useState } from 'react';
import PropTypes from 'prop-types';
import globalContext from './GlobalContext';

export default function GlobalProvider({ children }) {
  const [search, setSearch] = useState('');
  const [responseApi, setResponseApi] = useState([]);
  const obj = {
    search,
    setSearch,
    responseApi,
    setResponseApi,
  };

  return (
    <globalContext.Provider value={obj}>
      { children }
    </globalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
