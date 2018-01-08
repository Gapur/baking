import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';

const RouterComponent = () =>
  <Switch>
    <Route exact path='/login' component={LoginScreen} />
    <Route exact path='/signup' component={SignupScreen} />
  </Switch>;

export default RouterComponent;
