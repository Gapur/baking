import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import RecipesScreen from '../../recipes';
import MyRecipesScreen from '../../recipes/MyRecipes';
import NewRecipe from '../../recipes/NewRecipe';
import EditRecipe from '../../recipes/EditRecipe';
import NotesScreen from '../../notes';

const MainLayout = () => (
  <div id="main">
    <Header />
    <Switch>
      <Route exact path="/recipes" component={RecipesScreen} />
      <Route exact path="/my-recipes" component={MyRecipesScreen} />
      <Route exact path="/my-recipes/new" component={NewRecipe} />
      <Route exact path="/my-recipes/edit/:id" component={EditRecipe} />
      <Route exact path="/notes" component={NotesScreen} />
      <Route path="/" component={RecipesScreen} />
    </Switch>
  </div>
);

export default MainLayout;
