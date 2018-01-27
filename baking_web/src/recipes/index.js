import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Masonry from 'react-masonry-component';
import { push } from 'react-router-redux';

import withData from '../shared/components/LoadingHoc';
import { fetchRecipes } from './recipesActions';

class RecipesScreen extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.push(`/recipes/edit/${id}`);
  }

  renderHeader() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h4 className="title is-4">Baking Recipes</h4>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
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
        
        <Masonry className="columns is-multiline">
          {this.props.recipes.map(recipe =>
            <div className="column is-3" onClick={() => this.handleClick(recipe._id)}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={recipe.image} alt="recipe" />
                  </figure>
                </div>
                <div className="card-content">
                  <h4 className="title is-4">{recipe.name}</h4>
                </div>
              </div>
            </div>
          )}
        </Masonry>
      </div>
    );
  }
}

export default compose(
  connect(({ recipes }) => ({
    recipes
  }),
    { fetchRecipes, push }
  ),
  withData(
    ({ recipes, fetchRecipes }) => ({
      loader: fetchRecipes, isLoaded: recipes != null,
    })
  )
)(RecipesScreen);
