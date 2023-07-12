import React, { useState } from "react";

function GuessTheNumber() {
  const [guess, setGuess] = useState("");

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
  };

  if (guess >= 1 && guess <= 10) {
  }

  return (
    <div>
      <label htmlFor="guessInput">Enter your guess (between 1 and 10):</label>
      <input
        type="number"
        id="guessInput"
        value={guess}
        onChange={handleGuessChange}
        min={1}
        max={10}
      />
    </div>
  );
}

export default GuessTheNumber;
