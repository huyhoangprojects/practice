import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Counter from './Counter/Counter'
class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main className="main">
          <Counter />
        </main>
      </div>
    );
  }
}

export default App;
