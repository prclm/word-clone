import React from "react";

function GuessInput({ wordLength, guesses, setGuesses, gameover }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length === wordLength) {
          console.log({ guess });
          setGuesses([...guesses, guess]);
          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={wordLength}
        pattern={`[A-Za-z]{${wordLength}}`}
        disabled={gameover}
      />
    </form>
  );
}

export default GuessInput;
