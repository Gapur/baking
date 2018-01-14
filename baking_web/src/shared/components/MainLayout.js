import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import * as Recipes from '../../recipes';
import NotesScreen from '../../notes';

const MainLayout = () => (
  <div id="main">
    <Header />
    <Switch>
      <Route path="/" component={Recipes.RecipesList} />
      <Route exact path="/recipes" component={Recipes.RecipesList} />
      <Route exact path="/recipes/new" component={Recipes.NewRecipe} />
      <Route exact path="/recipes/edit/:id" component={Recipes.EditRecipe} />
      <Route exact path="/notes" component={NotesScreen} />
    </Switch>
  </div>
);

export default MainLayout;
