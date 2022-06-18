import React, { useState } from 'react';
import './Modal.scss';

export const Modal = (Props) => {
  const [error, setError] = useState(false);

  const nameChoiceButton = () => {
    if (Props.player1.length === 0 || Props.player2.length === 0) {
      Props.setActive(true);
      setError(true);
    } else {
      Props.setActive(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal__content">
        {error && (
          <p className="modal__error">Write the name</p>
        )}
        <input
          placeholder="X player name"
          type="text"
          value={Props.player1.trim()}
          onChange={(event) => {
            Props.setPlayer1(event.target.value);
            setError(false);
          }}
        />
        <input
          placeholder="O player name"
          type="text"
          value={Props.player2.trim()}
          onChange={(event) => {
            Props.setPlayer2(event.target.value);
            setError(false);
          }}
        />
        <button
          type="submit"
          onClick={nameChoiceButton}
        >
          Send
        </button>
      </div>
    </div>
  );
};
