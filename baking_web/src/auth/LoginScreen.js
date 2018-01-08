import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Layout } from 'antd';

import LoginForm from './components/LoginForm';
import './styles/loginScreen.css';

const { Content } = Layout;

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
      <Layout>
        <Content className="login-container">
          <div className="">
            <h1>Built for developers</h1>
            <p>
              GitHub is a development platform inspired by
              the way you work. From open source to business,
              you can host and review code, manage projects,
              and build software alongside millions of other
              developers.
            </p>
          </div>
          <LoginForm onSubmit={this.onSubmit} />
        </Content>
      </Layout>
    );
  }
}

LoginScreen.propTypes = {
  push: PropTypes.func.isRequired,
};

export default connect(null, { push })(LoginScreen);
