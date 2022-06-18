import React from 'react';
import './Board.scss';

export const Board = Props => (
  <div className="board">
    {Props.squares.map((square, index) => (
      <button
        type="button"
        className="square"
        onClick={() => Props.click(index)}
      >
        {square}
      </button>
    ))}
  </div>
);
