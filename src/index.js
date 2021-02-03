import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [thunk];

applyMiddleware(...middleWare)

const store = createStore(
rootReducer, composeWithDevTools(
  applyMiddleware(...middleWare)  
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

