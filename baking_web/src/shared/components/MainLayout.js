import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import * as Recipes from '../../recipes';
import NotesScreen from '../../notes';

const MainLayout = () => (
  <div id="main">
    <Header />
    <Switch>
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/notes" component={NotesScreen} />
    </Switch>
  </div>
);

export default MainLayout;
