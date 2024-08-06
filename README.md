import React, { useState } from 'react';
import Dice1 from './assets/dice-1.svg';
import Dice2 from './assets/dice-2.svg';
import Dice3 from './assets/dice-3.svg';
import Dice4 from './assets/dice-4.svg';
import Dice5 from './assets/dice-5.svg';
import Dice6 from './assets/dice-6.svg';

const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const GamePage = ({ toggleRulesModal }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState('Click on Dice Roll');
  const [diceNumber, setDiceNumber] = useState(1);

  const selectNumber = (number) => {
    setSelectedNumber(number);
    setMessage(`You selected number ${number}`);
  };

  const rollDice = () => {
    if (selectedNumber === null) {
      setMessage('You have not selected any number');
      return;
    }
    const rolledNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(rolledNumber);
    if (rolledNumber === selectedNumber) {
      setTotalScore(totalScore + rolledNumber);
    }
  };

  const resetScore = () => {
    setTotalScore(0);
    setSelectedNumber(null);
    setMessage('Click on Dice Roll');
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-pink-500 to-red-500 text-white">
      <div className="flex justify-between w-full px-10 mt-10">
        <div>Total Score: {totalScore}</div>
        <div>
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <button
              key={number}
              className="mx-1 px-2 py-1 bg-pink-600 hover:bg-pink-700 rounded-lg"
              onClick={() => selectNumber(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <div>{message}</div>
        <img
          src={diceImages[diceNumber - 1]}
          alt="Dice"
          className="w-32 h-32 mt-4 cursor-pointer"
          onClick={rollDice}
        />
      </div>
      <div className="flex mt-10">
        <button
          onClick={resetScore}
          className="mx-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg"
        >
          Reset Score
        </button>
        <button
          onClick={toggleRulesModal}
          className="mx-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg"
        >
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default GamePage;
