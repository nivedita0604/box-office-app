import React from 'react';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route exact path="/">
        {' '}
        this is home page
      </Route>
      <Route exact path="/started">
        {' '}
        this is Started
      </Route>
      <Route>This is 404 Page</Route>
    </Switch>
  );
}

export default App;
