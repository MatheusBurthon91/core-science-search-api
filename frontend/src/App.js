import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import HistorySearch from './pages/HistorySearch';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/search_history" component={HistorySearch} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
