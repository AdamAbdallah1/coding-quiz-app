import { useState } from "react"
import Quiz from "./Quiz"

function Home() {

    const [startQuiz, setStartQuiz] = useState(false);

    if (startQuiz) {
        return <Quiz />
    }

    return (
        <div className="app-container">
            <h1>Coding Quiz App</h1>
            <p>Test your knowlegde now</p>
            <button className="start-button" onClick={() => setStartQuiz(true)}>Start Quiz</button>
        </div>
    )
}

export default Home