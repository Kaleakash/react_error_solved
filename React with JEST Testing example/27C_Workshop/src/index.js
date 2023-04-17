// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux'
import { Provider, useDispatch } from 'react-redux';
import reducer from './reducers';
import BankAccount from './bankAccount';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BankAccount />
  </Provider>,
  document.getElementById('root')
);