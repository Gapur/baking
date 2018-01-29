import React from 'react';
import { connect } from 'react-redux';

const RecipeDetails = ({ recipe }) => {
  return (
    <div id="recipe-detail">
      <section className="hero is-light">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-4">
              <figure className="image is-4by3">
                <img src={recipe.image} />
              </figure>
            </div>
            <div className="column is-8">
              <div className="content">
                <p><strong>{recipe.name}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section columns">
        <div className="column is-4">
        </div>
        <div className="column is-8">
        </div> 
      </section>
    </div>
  );
}

export default connect(
  ({ recipes }, { match: { params } }) => ({
    recipe: recipes.find(({ _id }) => _id == params.id)
  })
)(RecipeDetails);
