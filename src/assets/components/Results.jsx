function Results({ questionBank, userAnswers, restartQuiz }) {
    function getScore() {
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore ++
            }
        })

        return finalScore;
    }
    const score = getScore()

    function calcResult() {
        if (score < 5) {
            return "Quiz Failed"
        } else {
            return "Quiz Completed"
        }
    }

    return (
        <div>
            <h2>Quiz Completed</h2>
            <p>Your Score: {score}/{questionBank.length}</p>
            <p>{calcResult()}</p>
            <button className="restart-button" onClick={restartQuiz}> Restart Quiz</button>
        </div>
    )
}

export default Results