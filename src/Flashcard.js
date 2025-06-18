import React from 'react';
import './Flashcard.css';

function Flashcard({ displayText, color, onCardClick }) {
  return (
    <div
      className="flashcard"
      style={{ backgroundColor: color }}
      onClick={onCardClick}
    >
      <p>{displayText}</p>
    </div>
  );
}

export default Flashcard;
