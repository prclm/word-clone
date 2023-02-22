import React from "react";

function GameOver({ won, answer, score, restartGame }) {
  const status = won ? "happy" : "sad";
  return (
    <div
      className={`banner ${status}`}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {status === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{score} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={() => restartGame()}>restart</button>
    </div>
  );
}

export default GameOver;
