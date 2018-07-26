import React from 'react';
import Square from './Square';
import './board.scss';

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null)
    }
    this.handleClick = this.handleClick.bind(this)
  };

  renderSquare = (val) => {
    return <Square value={val} onClick={this.handleClick} />
  };

  handleClick = (val) => {
    console.log(val)
  };
  render() {
    return (
      <div className="board">
        <div className="board__row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="board__row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className="board__row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
      </div>
    )
  }
}

export default Board;