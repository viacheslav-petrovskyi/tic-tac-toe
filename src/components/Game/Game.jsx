import React, { useState } from 'react';
import { Board } from '../Board/Board';
import { Modal } from '../Modal/Modal';
import { calculateWinner } from './calculateWinner';
import './Game.scss';

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [modalActive, setModalActive] = useState(true);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [countPlayer1, setCountPlayer1] = useState(0);
  const [countPlayer2, setCountPlayer2] = useState(0);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    board[index] = xIsNext ? 'X' : 'O';

    setBoard(board);
    setXIsNext(!xIsNext);
  };

  const newGame = () => {
    setBoard(Array(9).fill(''));
    setXIsNext(true);
    if (winner === 'X') {
      setCountPlayer1(countPlayer1 + 1);
    }

    if (winner === 'O') {
      setCountPlayer2(countPlayer2 + 1);
    }
  };

  return (
    <div className="wrapper">
      {modalActive && (
        <Modal
          setActive={setModalActive}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
        />
      )}
      <p>
        {winner
          ? `${winner === 'X' ? player1 : player2} победитель`
          : `Сейчас ходит: ${xIsNext ? player1 : player2}`
        }
      </p>
      <Board
        squares={board}
        click={handleClick}
      />
      <button
        className="start__button"
        type="button"
        onClick={newGame}
      >
        New Game
      </button>
      <p>{`${player1}: ${countPlayer1}`}</p>
      <p>{`${player2}: ${countPlayer2}`}</p>
    </div>
  );
};
