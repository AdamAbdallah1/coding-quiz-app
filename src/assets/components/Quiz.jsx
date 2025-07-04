import { use, useState } from "react";
import Results from "./Results";

function Quiz() {
    const questionBank = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Which HTML tag is used to link a CSS file?",
        options: ["<script>", "<style>", "<link>", "<css>"],
        answer: "<link>"
    },
    {
        question: "Which React hook is used to handle state?",
        options: ["useState", "useEffect", "useRef", "useMemo"],
        answer: "useState"
    },
    {
        question: "Which method is used to output data in JavaScript?",
        options: ["print()", "console.log()", "write()", "output()"],
        answer: "console.log()"
    },
    {
        question: "Which company developed React?",
        options: ["Google", "Microsoft", "Facebook", "Twitter"],
        answer: "Facebook"
    },
    {
        question: "Which CSS property changes text color?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color"
    },
    {
        question: "Which SQL statement is used to retrieve data?",
        options: ["GET", "EXTRACT", "PULL", "SELECT"],
        answer: "SELECT"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "<!-- -->", "/* */"],
        answer: "//"
    },
    {
        question: "What does API stand for?",
        options: [
        "Application Programming Interface",
        "Advanced Programming Integration",
        "Applied Program Internet",
        "Application Process Interaction"
        ],
        answer: "Application Programming Interface"
    },
    {
        question: "Which HTML attribute is used for an image source?",
        options: ["src", "href", "link", "alt"],
        answer: "src"
    }
    ];


    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion]

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
            <Results userAnswers={userAnswers} 
            questionBank={questionBank} 
            restartQuiz={restartQuiz}
            />
        );
    }

    return (
        <div>
            <h2> Question {currentQuestion + 1}/{questionBank.length}</h2>
            <p className="question"> {questionBank[currentQuestion].question} </p>

            {questionBank[currentQuestion].options.map((option) => (
                <button
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
                    {currentQuestion === questionBank.length - 1 ? "Finsih Quiz" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Quiz