
var startBtn = document.getElementById("start-btn");
var quizContainer = document.getElementById("quiz");
var questionElement = document.getElementById("question");
var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");

var timerEl = document.getElementById("timer");
var results = document.getElementById("results");

// Array containing all the questions and answer choices
var questionsList = [
  {
    question: "Commonly used data types do not include:",
    answers: [
      {text: "strings", correct: false},
      {text: "boolean", correct: false},
      {text: "alerts", correct: true},
      {text: "numbers", correct: false}
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      {text: "Numbers and strings", correct: false},
      {text: "Other arrays", correct: false},
      {text: "Booleans", correct: false},
      {text: "All of the above", correct: true}
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed within:",
    answers: [
      {text: "Quotes", correct: false},
      {text: "Curly brackets", correct: false},
      {text: "Parentheses", correct: true},
      {text: "Square bracketers", correct: false}
    ]
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables",
    answers: [
      {text: "Commas", correct: false},
      {text: "Curly brackets", correct: false},
      {text: "Quotes", correct: true},
      {text: "Parentheses", correct: false}
    ]
  },

]

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.classList.add("hide");
  quizContainer.classList.remove("hide");
  startTimer();
  showQuestion();
}


// Timer
var timeLeft = 30;
function startTimer() {
  
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft 
    if (timeLeft === 0 || currentQuestion+1 === questionsList.length) {
      clearInterval(timeInterval);
      timer.textContent = "0";
      // advances to results screen when times up
      quizContainer.classList.add("hide");
      results.classList.remove("hide");
    }
  }, 1000);
}

var feedback = document.getElementById("feedback")
var currentQuestion = 0;
function showQuestion() {
  
  questionElement.textContent = questionsList [ currentQuestion ].question;
  
    


  choiceA.textContent = questionsList[currentQuestion].answers[0].text;
  choiceB.textContent = questionsList[currentQuestion].answers[1].text;
  choiceC.textContent = questionsList[currentQuestion].answers[2].text;
  choiceD.textContent = questionsList[currentQuestion].answers[3].text;
}



choiceA.addEventListener("click", processAnswer);
choiceB.addEventListener("click", processAnswer);
choiceC.addEventListener("click", processAnswer);
choiceD.addEventListener("click", processAnswer);

function processAnswer() {
  var selectedAnswer = EventTarget
  var incorrect = questionsList.answers.correct


  if (currentQuestion+1 === questionsList.length) {
    showResults();
  } else {
    nextQuestion();
  }
  console.log()

}


function nextQuestion() {
  currentQuestion++ ;
  showQuestion();
}

function showResults() {
  quizContainer.classList.add("hide");
  results.classList.remove("hide");
  
}