import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';
import { store, history } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AuthRouter />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
