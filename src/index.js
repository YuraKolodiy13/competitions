import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, {history} from "./store/store";
import {Provider} from 'react-redux';
import './index.scss'
import {ConnectedRouter} from "connected-react-router";

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.querySelector('#root'));