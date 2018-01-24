import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Masonry from 'react-masonry-component';

import withData from '../shared/components/LoadingHoc';
import { fetchRecipes } from './recipesActions';

class MyRecipesScreen extends Component {
  
  renderHeader() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h4 className="title is-4">My Recipes</h4>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button
                className="button is-primary "
              >
                New Recipe
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  render() {
    return (
      <div className="container">
        {this.renderHeader()}
        
      </div>
    )
  }
}

export default compose(
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
)(MyRecipesScreen);
