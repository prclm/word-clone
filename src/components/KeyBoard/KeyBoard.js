import React from "react";

import { getStatusByLetter } from "../../game-helpers";

const KEYS = ["QWERTZUIOPÜ", "ASDFGHJKLÖÄ", "YXCVBNM"];

function KeyBoard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  const keys = KEYS.map((group) => {
    const letters = group.split("");
    const keys = letters.map((letter) => {
      return {
        letter,
        status: statusByLetter[letter] || "",
      };
    });
    return [...keys];
  });
  return (
    <div className="keyboard">
      {keys.map((row, i) => {
        return (
          <div key={i} className="key-row">
            {row.map((key) => (
              <div key={key.letter} className={`key ${key.status}`}>
                {key.letter}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default KeyBoard;
