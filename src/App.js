import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        {' '}
        <Home />
      </Route>
      <Route exact path="/starred">
        {' '}
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>
        <div>This is 404 Page</div>
      </Route>
    </Switch>
  );
};

export default App;
