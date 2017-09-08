import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../shared/utils/validation';
import { renderInput } from '../../shared/utils/renderHelpers';
import '../styles/signupForm.css';

const FormItem = Form.Item;

class SignupForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, error, submitting, onSubmit } = this.props;

    return (
      <div className="signup-form-container">
        <Form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="phone"
            className="input-mobile-number"
            prefix={prefixSelector}
            component={renderInputLabel}
            placeholder="Login"
            validate={required}
          />
          <FormItem>
            <Button className="btn-signup" type="primary" htmlType="submit" disabled={submitting}>
              {submitting ? 'Signing in...' : 'Sign Up'}
            </Button>
            {error &&
              <span className="message-error">
                <i className="icon-error" />{error}
              </span>}
          </FormItem>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'signupForm' })(SignupForm);
