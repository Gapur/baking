import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

class RecipesList extends Component {

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
              <button
                className="button is-primary "
                onClick={() => this.setState({ showNoteModal: true })}
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
        
        <Masonry className="columns is-multiline">
          {this.props.recipes.map(recipe =>
            <div className="column is-3">
            </div> 
          )} 
        </Masonry>
      </div>
    );
  }
}

export default connect(
  ({ recipes }) => ({ recipes }),
  { }
)(RecipesList);
