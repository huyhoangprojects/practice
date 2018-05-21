import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
import counter from "./reducers/counterReducer";
import Counter from './components/Counter/Counter';
import { increase, decrease } from './actions/counterAction'


const store = createStore(counter);
const rootEl = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState().count}
      onIncrement={() => store.dispatch(increase())}
      onDecrement={() => store.dispatch(decrease())}
    />,
    rootEl
  );

render();
store.subscribe(render);
