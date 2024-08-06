import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';
import RulesModal from './components/RulesModal';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  const toggleRulesModal = () => {
    setIsRulesModalOpen(!isRulesModalOpen);
  };

  return (
    <div className="App">
      {!isGameStarted ? (
        <LandingPage startGame={startGame} />
      ) : (
        <GamePage toggleRulesModal={toggleRulesModal} />
      )}
      {isRulesModalOpen && <RulesModal toggleRulesModal={toggleRulesModal} />}
    </div>
  );
}

export default App;
