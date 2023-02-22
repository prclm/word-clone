import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOver from "../GameOver/GameOver";
import KeyBoard from "../KeyBoard/KeyBoard";
import { checkWord } from "../../game-helpers";

const maxWords = NUM_OF_GUESSES_ALLOWED;
const wordLength = 5;
// Pick a random word on every pageload.
const intiAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ intiAnswer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(intiAnswer);
  const won = guesses[guesses.length - 1] === answer;
  const gameover = guesses.length === maxWords || won;

  const validatedGuesses = guesses.map((guess) => checkWord(guess, answer));
  const restartGame = () => {
    const nextAnswer = sample(WORDS);
    console.info({ nextAnswer });
    setAnswer(nextAnswer);
    setGuesses([]);
  };
  return (
    <>
      <GuessResults
        maxWords={maxWords}
        wordLength={wordLength}
        validatedGuesses={validatedGuesses}
      />
      <GuessInput
        wordLength={wordLength}
        guesses={guesses}
        setGuesses={setGuesses}
        gameover={gameover}
      />
      <KeyBoard validatedGuesses={validatedGuesses} />
      {gameover && (
        <GameOver
          won={won}
          score={guesses.length}
          answer={answer}
          restartGame={restartGame}
        />
      )}
    </>
  );
}

export default Game;
