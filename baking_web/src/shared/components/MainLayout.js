import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import * as Recipes from '../../recipes';
import * as Notes from '../../notes';

const MainLayout = () => (
  <div id="main">
    <Header />
    <Switch>
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/notes" component={Notes.NotesList} />
    </Switch>
  </div>
);

export default MainLayout;
