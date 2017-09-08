import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { required } from '../../shared/utils/validation';
import { renderInput } from '../../shared/utils/renderHelpers';
import iconVisibilty from '../../shared/assets/icons/ic_visibility.svg';
import iconVisibiltyOff from '../../shared/assets/icons/ic_visibility_off.svg';
import '../styles/loginForm.css';

const { Item: FormItem } = Form;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { showPassword } = this.state;
    const { handleSubmit, error, submitting, onSubmit } = this.props;

    const iconEye = this.state.showPassword ? iconVisibilty : iconVisibiltyOff;
    const suffix = <img alt="eye" src={iconEye} className="icon-eye" onClick={this.handleCheck} />;// eslint-disable-line

    return (
      <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="login"
          className="login-form__input"
          component={renderInput}
          placeholder="Login"
          validate={required}
        />
        <Field
          name="password"
          className="login-form__input"
          type={showPassword ? 'text' : 'password'}
          suffix={suffix}
          component={renderInput}
          placeholder="Password"
          validate={required}
        />
        <FormItem>
          <Link className="login-form__link" to="forgot_password">Forgot Password?</Link>
        </FormItem>
        <FormItem>
          <Button className="login-form__btn" type="primary" htmlType="submit" disabled={submitting}>
            {submitting ? 'Logging in...' : 'Log In'}
          </Button>
          {error && <span className="login-form__error"><i className="icon-error" />{error}</span>}
        </FormItem>
      </Form>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(LoginForm);
