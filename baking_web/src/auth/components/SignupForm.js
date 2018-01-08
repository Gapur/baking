import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../shared/utils/form_validations';
import { } from '../../shared/utils/form_components';

class SignupForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmit, error, submitting } = this.props;

    return (
      <form className="signup-form" onSubmit={onSubmit}>
      </form>
    );
  }
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default reduxForm({ form: 'signupForm' })(SignupForm);
