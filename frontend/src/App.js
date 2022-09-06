import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import HistorySearch from './pages/HistorySearch';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/favorites" component={Favorites} exact />
      <Route path="/search_history" component={HistorySearch} exact />
    </Switch>

  );
}

export default App;
