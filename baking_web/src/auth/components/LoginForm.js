import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { required } from '../../shared/utils/form_validations';
import { } from '../../shared/utils/form_components';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
  }

  render() {
    const { onSubmit, error, submitting } = this.props;

    return (
      <form onSubmit={onSubmit}>
        
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default reduxForm({ form: 'loginForm' })(LoginForm);
