const questions = [
    {
        question: "The full form of RDBMS?",
        answers: [
            { text: "Relational Database Management Service", correct: false },
            { text: "Relational Database Management System", correct: true },
            { text: "Relational Database Managerial Service", correct: false },
            { text: "None of the above", correct: false },
        ],
    },
    {
        question: "What is relation in RDBMS?",
        answers: [
            { text: "Table", correct: true },
            { text: "Key", correct: false },
            { text: "Data Types", correct: false },
            { text: "Row", correct: false },
        ],
    },
    {
        question: "The relational model of RDBMS is concerned with?",
        answers: [
            { text: "Data Structure", correct: false },
            { text: "Data Manipulation", correct: false },
            { text: "Data Integrity", correct: false },
            { text: "All of the above", correct: true },
        ],
    },
    {
        question: "The primary key must be?",
        answers: [
            { text: "Unique", correct: false },
            { text: "Not Null", correct: false },
            { text: "Both A and B", correct: true },
            { text: "None of the above", correct: false },
        ],
    },
    {
        question: "Which of the following are examples of aggregate functions?",
        answers: [
            { text: "SUM", correct: false },
            { text: "MAX", correct: false },
            { text: "MIN", correct: false },
            { text: "All of the above", correct: true },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextElement = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextElement.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerElement.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct="true";
        }
        button.addEventListener("click",selectAnswer);
    });
}

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button =>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextElement.style.display="block";
} 
function showScore()
{
    answerElement.innerHTML = "";
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextElement.innerHTML="PlayAgain";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        if(currentQuestionIndex==questions.length-1)
        {
            nextElement.innerHTML="Finish";
        }
        showQuestion();
    }
    else{
        showScore();
    }
    
    
    
}

nextElement.addEventListener("click",()=>{

    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();






