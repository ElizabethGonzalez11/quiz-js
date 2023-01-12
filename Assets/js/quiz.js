




//-----------------------------------------//
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const correctPoints = 25;
const maxQuestions = 4;


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
      question: " What is a normal resting heart rate?",
      choice1: " 50 to 90 beats per minute",
      choice2: " 60 to 100 beats per minute ",
      choice3: " 30 to 50 beats per minute",
      choice4: "100 to 120 beats per minute",
      answer: 1
    },
  
    {
      question: "What is hypotension?",
      choice1: "low blood sugar",
      choice2: "low blood pressure",
      choice3: "high blood pressure",
      choice4: "high blood sugar",
      answer: 2
    },
  
    {
      question: "When should a nurse weigh a patient to obtain the most accurate weight:? ",
      choice1: "right after eating",
      hoice2: "2 to 3 hours after after eating",
      choice3: "at the same time everyday",
      choice4: "right after they wake up",
      answer: 3
    },
  
    {
      question: "What is a normal internal body temperature?",
      choice1: "98.6° F ",
      choice2: "99.9° F",
      choice3: "96° F",
      choice4: "100.4° F",
      answer: 1
    }
  ];

startQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [
    {
      question: " What is a normal resting heart rate?",
      choice1: " 50 to 90 beats per minute",
      choice2: " 60 to 100 beats per minute ",
      choice3: " 30 to 50 beats per minute",
      choice4: "100 to 120 beats per minute",
      answer: 1
    },
  
    {
      question: "What is hypotension?",
      choice1: "low blood sugar",
      choice2: "low blood pressure",
      choice3: "high blood pressure",
      choice4: "high blood sugar",
      answer: 2
    },
  
    {
      question: "When should a nurse weigh a patient to obtain the most accurate weight? ",
      choice1: "right after eating",
      choice2: "2 to 3 hours after after eating",
      choice3: "at the same time everyday",
      choice4: "right after they wake up",
      answer: 3
    },
  
    {
      question: "What is a normal internal body temperature?",
      choice1: "98.6° F ",
      choice2: "99.9° F",
      choice3: "96° F",
      choice4: "100.4° F",
      answer: 1
    }
  ];

getNewQuestion();

};
getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
    return window.location.assign('./highscores.html');
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;

};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
  
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply = 'correct'; 
      if (selectedAnswer == currentQuestion.answer) { 
        classToApply = 'incorrect';
        if (selectedAnswer = currentQuestion.answer) {

      }

      selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply);
          getNewQuestion();
      }, 1000);
    };
  });


startQuiz()