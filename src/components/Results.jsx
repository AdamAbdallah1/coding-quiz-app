import React from "react";

function Results({ questionBank, userAnswers, restartQuiz, returnToHome }) {

  function getScore() {
    let finalScore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });

    return finalScore;
  }

  const score = getScore();

  function calcResult() {
    if (score >= 5) {
      return "Quiz Completed";
    } else {
      return "Quiz Failed";
    }
  }

  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>Your Score: <span className={score >= 5 ? "success" : "failed"}>{score}/{questionBank.length}</span></p>
      <p>{calcResult()}</p>
      <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
      <button className="home-button" onClick={returnToHome}>Home Page</button>
    </div>
  );
}

export default Results;
