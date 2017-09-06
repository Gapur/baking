import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NoteScreen from './notes/NoteScreen';
import NotFoundScreen from './shared/components/NotFoundScreen';

const RouterComponent = () =>
  <Switch>
    <Route exact path="/" component={IssuesScreen} />
    <Route exact path="/note" component={IssuesScreen} />
    <Route path="/" component={NotFoundScreen} />
  </Switch>;

export default RouterComponent;
