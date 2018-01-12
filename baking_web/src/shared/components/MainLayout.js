import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Recipes from '../../recipes';

const MainLayout = () => (
  <div id="main">
    <Header />
    <Switch>
      <Route exact path="/recipes" component={Recipes} />
    </Switch>
  </div>
);

export default MainLayout;
