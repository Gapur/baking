import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import SignupForm from './components/SignupForm';

class SignupScreen extends Component {
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

SignupScreen.propTypes = {
  push: PropTypes.func.isRequired,
};

export default connect(null, {
  push,
})(SignupScreen);
