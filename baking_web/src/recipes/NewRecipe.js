import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeForm from './components/RecipeForm';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div>
        <RecipeForm onSubmit={this.handleSubmit} /> 
      </div>
    )
  }
}

export default connect(null, { })(NewRecipe);
