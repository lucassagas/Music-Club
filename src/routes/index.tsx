import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Discover } from '../pages/Discover';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Discover} />
  </Switch>
);

export default Routes;
