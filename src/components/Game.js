import React from 'react';
import Board from './Board';
import './game.scss';

class Game extends React.Component {
  render() {
    const status = 'Next player: X';
    return (
      <div className="game">
        <div className="game__board">
          <Board />
        </div>
        <div className="game__info">
          <p className="game__status">{status}</p>
          <ol className="history">
          </ol>
        </div>
      </div>
    )
  }
}

export default Game;