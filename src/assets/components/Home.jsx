import { useState } from "react";
import Quiz from "./Quiz";

import pythonQuestions from "./data/pythonQuestions.js";
import javascriptQuestions from "./data/javascriptQuestions.js";
import generalCodingQuestions from "./data/generalCodingQuestions.js"; 

function Home() {
  const [selectedQuiz, setSelectedQuiz] = useState('');

  function getQuestionBank() {
    if (selectedQuiz === "pythonQuestions") return pythonQuestions;
    if (selectedQuiz === "javascriptQuestions") return javascriptQuestions;
    if (selectedQuiz === "generalCodingQuestions") return generalCodingQuestions;
    return [];
  }

  function returnToHome() {
    setSelectedQuiz('');
  }

  if (selectedQuiz) {
    return (
      <Quiz
        questionBank={getQuestionBank()}
        returnToHome={returnToHome}  // ✅ pass this down
      />
    );
  }

  return (
    <div className="app-container">
      <h1>Coding Quiz App</h1>
      <p>Test your knowledge now</p>
      <div className="quizes">
        <button className="start-button" onClick={() => setSelectedQuiz("pythonQuestions")}>Python Quiz</button>
        <button className="start-button" onClick={() => setSelectedQuiz("javascriptQuestions")}>JavaScript Quiz</button>
        <button className="start-button" onClick={() => setSelectedQuiz("generalCodingQuestions")}>General Coding Quiz</button>
      </div>
    </div>
  );
}

export default Home;
