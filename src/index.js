import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {save} from 'redux-localstorage-simple';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [thunk];

applyMiddleware(...middleWare)

const store = createStore(
rootReducer, composeWithDevTools(
  applyMiddleware(...middleWare, save({ 
    states: ["posts"], 
    namespace: "Tasks"
  }))  
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

