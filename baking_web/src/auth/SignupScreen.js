import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import SignupForm from './components/SignupForm';
import './styles/signupScreen.css';

const { Content } = Layout;

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
      <Layout>
        <Content className="signup-container">
          <div className="panel">
            <span className="title">Sign Up</span>
            <SignupForm onSubmit={this.onSubmit} />
            <span className="link-login" style={{ marginBottom: 5 }}>
              Sign up to start your free trial
            </span>
            <span className="link-login">
              Already a member?<Link to="login">Log in here</Link>
            </span>
            <span className="terms-condition">
              By signing up I agree to the <span className="link-term">Terms and Conditions.</span>
            </span>
          </div>
        </Content>
      </Layout>
    );
  }
}

SignupScreen.propTypes = {
  push: PropTypes.func.isRequired,
};

export default connect(null, {
  push,
})(SignupScreen);
