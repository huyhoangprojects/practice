import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import counter from "./reducers/counterReducer";
import Counter from './containers/Counter';

const store = createStore(counter);
const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootEl
);
