import React from "react";
import { range } from "../../utils";

function GuessResults({ validatedGuesses, wordLength, maxWords }) {
  return (
    <div className="guess-results">
      {range(maxWords).map((i) => {
        const word = validatedGuesses[i] || "";
        return (
          <p key={i} className="guess">
            {range(wordLength).map((i) => {
              const letter = word[i] || "";
              return (
                <span key={i} className={`cell ${letter?.status}`}>
                  {letter?.letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
