const timeElement = document.querySelector("#time");
const scoreElement = document.querySelector("score");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const questionElement = document.querySelector(".question-section");
const answerElement = document.querySelector(".answer-section");
const feedbackElement = document.querySelector(".feedback-section");
const hudElement = document.querySelector(".hud-box");

const points = 100;

let score = 0;
let timeRemaining = 60;
let currentQuestionIndex;
let questionPool;
let loadedQuestion;

let questions = [
  { question: " What is a normal resting heart rate?",
    answers: [
    {text: " 50 to 90 beats per minute", correct: false},
    {text: " 60 to 100 beats per minute ", correct: true},
    {text: " 30 to 50 beats per minute", correct: false},
    {text: "100 to 120 beats per minute", correct: false},
    ]},

  { question: "What is hypotension?",
    answers: [
    {text: "low blood sugar", correct: false},
    {text: "low blood pressure", correct: false},
    {text: "high blood pressure", correct: true},
    {text: "high blood sugar", correct: false},
    ]},

  { question: "When should a nurse weigh a patient to obtain the most accurate weight:? ",
    answers: [
    {text: "right after eating", correct: false},
    {text: "2 to 3 hours after after eating", correct: false},
    {text: "at the same time everyday", correct: true},
    {text: "right after they wake up", correct: false},
    ]},

  { question: "What is a normal internal body temperature?",
    answers: [
    {text: "98.6° F ", correct: true},
    {text: "99.9° F", correct: false},
    {text: "96° F", correct: false},
    {text: "100.4° F", correct: false},
    ]},
  ];

startBtn.addEventListener ('click', startQuiz);

function startQuiz() {
  restart ()
  questionPool = questionPool.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  quizUi ();
  quizTimer ();
  loadQuestion ();
}
function loadQuestion () {
  blankSlate ()
  getNewQuestion (questionPool[currentQuestionIndex]);
}

function loadQuestion(question) {
questionElement.innerHTML = question.question

 question.answers.forEach(answers => {
  const button = document.createElement('button')
  button.innerText = answers.text
  button.classList.add('btn')

  if(answers.correct){button.dataset.correct = answers.correct}

  button.addEventListener('click', selectAnswer)
  answerElement.appendChild(button)
  console.log(answers.correct)
});}

function selectAnswer (e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  Array.from(answerElement.children).forEach(button => {
    setClass(button.dataset.correct)
  })
  if(correct) {
  incrementScore(points)
  console.log("That is correct!")
} else {
  console.log('That is incorrect!')
  timeLeft = timeLeft - 10
}
  if (questionPool.length > currentQuestionIndex +1){
    setTimeout (loadQuestion,1000);
  }else{
    console.log("Quiz over!");
    quizOver()
  }
    currentQuestionIndex++
  }
function quizOver();
  }
