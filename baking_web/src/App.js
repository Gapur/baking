import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import Routers from './Router';
import note from './notes/notesReducer';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const reducers = combineReducers({
  note,
  router: routerReducer,
  form: reduxFormReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk, historyMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routers />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
