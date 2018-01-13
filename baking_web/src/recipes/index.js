import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withData from '../shared/components/LoadingHoc';
import { fetchRecipes } from './recipesActions';

const connectWithData = compose(
  connect(({ recipes }) => ({
    recipes
  }),
    { fetchRecipes }
  ),
  withData(
    ({ recipes, fetchRecipes }) => ({
      loader: fetchRecipes, isLoaded: recipes != null,
    })
  )
);

const Container = connectWithData(({ children }) => children);

import EditRecipe from './EditRecipe';
import NewRecipe from './NewRecipe';
import RecipesList from './RecipesList';

export {
  Container,
  EditRecipe,
  NewRecipe,
  RecipesList,
}
