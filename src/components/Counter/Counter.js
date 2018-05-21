import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }
  onIncrease() {
    this.setState({ count: this.state.count + 1})
  }
  onDecrease() {
    this.setState({ count: this.state.count - 1})
  }
  render() {
    return (
      <div className="counter">
        Click <span className="counter__number">{this.state.count}</span> {this.state.count !== 1 ? 'times' : 'time'}
        <button onClick={this.onIncrease} className="counter__button">+</button> <button onClick={this.onDecrease} className="counter__button">-</button>
      </div>
    )
  }
}

export default Counter;