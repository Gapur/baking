import React from 'react';
import { connect } from 'react-redux';

const RecipeDetails = ({ recipe }) => {
  return (
    <div id="recipe-detail" className="content">
      <h3>{recipe.name}</h3>
    </div>
  );
}

export default connect(
  ({ recipes }, { match: { params } }) => ({
    recipe: recipes.find(({ _id }) => _id == params.id)
  })
)(RecipeDetails);
