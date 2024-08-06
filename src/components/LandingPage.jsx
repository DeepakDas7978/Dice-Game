import React from 'react';
import DiceSvg from './assets/dice.svg'; // Ensure the SVG file is in the correct path

const LandingPage = ({ startGame }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center bg-opacity-70 p-10">
        <img src={DiceSvg} alt="Dice" className="w-70 h-68 mb-4 md:mb-0 md:mr-8" />
        <div className="flex flex-col items-center md:items-end">
          <h1 className="text-7xl font-bold mt-4 text-center md:text-left">Dice Game</h1>
          <button
            onClick={startGame}
            className="mt-4 px-6 py-2 bg-black text-white rounded-lg mx-auto md:mx-0"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
