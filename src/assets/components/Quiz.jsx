import { useState } from "react";

function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Beirut", "London", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which language is used for web apps?",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All"
        },
        {
            question: "What does JSX stand for?",
            options: [
                "Javascript XML",
                "Java Syntax Extention",
                "Just a Simple Example",
                "None of the above"
            ],
            answer: "Javascript XML"
        },
    ];

    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        setCurrentQuestion(currentQuestion + 1);
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return (
        <div>
            <h2> Question 1</h2>
            <p className="question"> {questionBank[currentQuestion].question} </p>

            {questionBank[currentQuestion].options.map((option) => (
                <button className="option"  onClick={() => handleSelectOption(option)}>
                    {""}
                    {option} {""}
                </button>
            ))}

            <div className="nav-buttons">
                <button onCanPlay={goToPrev}> Previous </button>
                <button onClick={goToNext}> Next </button>
            </div>
        </div>
    );
}

export default Quiz