import PropTypes from 'prop-types';
import React from 'react';
import globalContext from './GlobalContext';

export default function GlobalProvider({ children }) {
  return (
    <globalContext.Provider>
      { children }
    </globalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
