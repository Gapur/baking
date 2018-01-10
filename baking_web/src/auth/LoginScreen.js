import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LoginForm from './components/LoginForm';
import { login } from './userActions';
import { parseFormErrors } from '../shared/utils/form_errors';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { login, push } = this.props;
    return login(values)
      .then(() => push('/'))
      .catch(parseFormErrors);
  }

  render() {
    return (
      <section className="section columns is-centered">
        <div className="column is-4">
          <LoginForm onSubmit={this.handleSubmit} />
        </div>
      </section>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default connect(null, { login, push })(LoginScreen);
