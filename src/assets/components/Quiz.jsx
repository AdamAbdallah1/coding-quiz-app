import { useState } from "react";
import Results from "./Results";
import Home from "./Home";

function Quiz({ questionBank, returnToHome }) {
  if (!questionBank || questionBank.length === 0) {
    return <p>No questions available.</p>;
  }

  const initialAnswers = Array(questionBank.length).fill(null);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswer = userAnswers[currentQuestion];

  const [homePage, setHomePage] = useState(false);

    if (homePage) {
        return (
            <Home />
        )
    }

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  

  if (isQuizFinished) {
    return (
        <Results
            userAnswers={userAnswers}
            questionBank={questionBank}
            restartQuiz={restartQuiz}
            returnToHome={returnToHome}
        />

    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}/{questionBank.length}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          key={option}
          className={"option" + (selectedAnswer === option ? " selected" : "")}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
