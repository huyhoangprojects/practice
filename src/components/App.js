import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Counter from './Counter/Counter'
import { createStore } from "redux";
import counter from "../reducers/counterReducer";


const store = createStore(counter);
class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main className="main">
          <Counter
            value={store.getState().count}
            onIncrement={() => store.dispatch({ type: "INCREMENT" })}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}
          />
        </main>
      </div>
    );
  }
}

export default App;
