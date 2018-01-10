import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotesScreen from './notes/NotesScreen';
import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';
import NotFoundScreen from './shared/components/NotFoundScreen';

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
  userIsAdminRedir,
} from './auth';

const RouterComponent = () =>
  <Switch>
    <Route exact path="/" component={userIsAuthenticatedRedir(NotesScreen)} />
    <Route exact path="/notes" component={userIsAuthenticatedRedir(NotesScreen)} />
    <Route exact path='/login' component={userIsNotAuthenticatedRedir(LoginScreen)} />
    <Route exact path='/signup' component={userIsNotAuthenticatedRedir(SignupScreen)} />
    <Route path="/" component={NotFoundScreen} />
  </Switch>;

export default RouterComponent;
