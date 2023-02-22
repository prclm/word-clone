const STATUS = ["correct", "misplaced", "incorrect"];

export const checkWord = (word, answer) => {
  const a = answer.toUpperCase().split("");
  const w = word.toUpperCase().split("");
  return w.map((letter, i) => {
    let status = STATUS[2]; // incorrect
    if (a.includes(letter)) status = STATUS[1]; // misplaced
    if (a[i] === w[i]) status = STATUS[0]; // correct
    return { letter, status };
  });
};

export const getStatusByLetter = (validatedGuesses) => {
  let result = {};
  validatedGuesses.forEach((guess, guessIndex) => {
    guess.forEach((char) => {
      const prevStatus = result[char.letter];
      const nextStatus = char.status;

      if (guessIndex + 1 === validatedGuesses.length) {
        // validate last guess:
        // status is only "correct" if the letter is not
        // also "misplaced" in another position
        if (
          prevStatus &&
          STATUS.indexOf(prevStatus) > STATUS.indexOf(nextStatus)
        ) {
          result[char.letter] = prevStatus;
        } else {
          result[char.letter] = nextStatus;
        }
      } else {
        // older guesses are status "used"
        result[char.letter] = "used";
      }
    });
  });
  return result;
};
