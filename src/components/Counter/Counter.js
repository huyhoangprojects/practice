import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="counter">
        Click <span className="counter__number">{value}</span> {value !== 1 ? 'times' : 'time'}
        <button onClick={onIncrement} className="counter__button">+</button> <button onClick={onDecrement} className="counter__button">-</button>
      </div>
    )
  }
}

export default Counter;