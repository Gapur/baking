import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LoginForm from './components/LoginForm';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div></div> 
    );
  }
}

LoginScreen.propTypes = {
  push: PropTypes.func.isRequired,
};

export default connect(null, { push })(LoginScreen);
