import React, { useState } from 'react';
import Dice1 from './assets/dice-1.svg';
import Dice2 from './assets/dice-2.svg';
import Dice3 from './assets/dice-3.svg';
import Dice4 from './assets/dice-4.svg';
import Dice5 from './assets/dice-5.svg';
import Dice6 from './assets/dice-6.svg';
import RulesModal from './RulesModal';

const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceNumber, setDiceNumber] = useState(1);
  const [message, setMessage] = useState('');
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const numbers = [1, 2, 3, 4, 5, 6];

  const selectNumber = (number) => {
    setSelectedNumber(number);
    setError('');
    setMessage(`You selected number ${number}`);
  };

  const rollDice = () => {
    if (selectedNumber === null) {
      setError('You have not selected any number');
      return;
    }
    const rolledNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(rolledNumber);
    if (rolledNumber === selectedNumber) {
      setScore(score + rolledNumber);
    } else {
      setScore(score - 2);
    }
    setMessage(`You rolled a ${rolledNumber}`);
    setSelectedNumber(null); // Reset selected number after each roll
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(null);
    setMessage('');
    setError('');
  };

  const toggleRulesModal = () => {
    setIsRulesModalOpen(!isRulesModalOpen);
  };

  return (
    <div className="flex flex-col items-center h-screen text-black px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between w-full mt-10">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 className='font-bold text-6xl md:text-2xl'>{score}</h1>
          <p className='font-bold text-lg md:text-xl'>Total Score</p>
        </div>
        <div className="p-2 flex flex-col items-center md:items-end">
          <p className="text-red-600 mb-2">{error}</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-2 ">
            {numbers.map((number) => (
              <button
                key={number}
                className={`p-4 border-2 border-black ${selectedNumber === number ? 'bg-black text-white' : ''}`}
                onClick={() => selectNumber(number)}
              >
                {number}
              </button>
            ))}
          </div>
          <p className="mt-2 font-bold">Select a number</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="text-center">{message}</div>
        <img
          src={diceImages[diceNumber - 1]}
          alt="Dice"
          className="w-32 h-32 mt-4 cursor-pointer"
          onClick={rollDice}
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className='mb-4 font-bold'>Click on Dice to roll</p>
        <button
          onClick={resetScore}
          className="mx-2 px-4 py-2 border-2 border-black text-black font-bold rounded-lg"
        >
          Reset Score
        </button>
        <button
          onClick={toggleRulesModal}
          className="mx-2 mt-2 px-4 py-2 bg-black text-white rounded-lg"
        >
          Show Rules
        </button>
      </div>
      {isRulesModalOpen && (
        <div className="mt-2 w-full flex justify-center">
          <RulesModal />
        </div>
      )}
    </div>
  );
};

export default GamePage;
