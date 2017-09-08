import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import LoginForm from './components/LoginForm';

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
          <div className="panel">
            <span className="title">Welcome Back to VimChat!</span>
            <LoginForm onSubmit={this.onSubmit} />
            <span className="link-signup">
              <span>New to VimChat?</span>
              <Link to="/signup">Sign up here</Link>
            </span>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default connect(null, {})(LoginScreen);
