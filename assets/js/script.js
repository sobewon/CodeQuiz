
var timeEl = document.getElementById("time");
const startGame = document.getElementById("startGame");

//correct answer
const correctA = document.getElementById("correct");
//wrong answer
const wrongA = document.getElementById("wrong");

const tempTime = 5;
var secondsLeft = tempTime;
// Timer function for  countdown after clicking "Start Game" button
function timer() {
  var timerInterval = setInterval(function() {
    timeEl.textContent = "GAME OVER in " + secondsLeft + " seconds.";
    secondsLeft--;
    score()
    if(secondsLeft === -2) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      alert("GAME OVER!");
      secondsLeft = tempTime;

      outOfTime()
      qListToggle("qlist")
    }

  }, 1000);
}

//function to clear timer
function outOfTime() {
  timeEl.textContent = " ";
}

var question = document.getElementById("question-container");

function qListToggle(elementid) {
  var qlist = document.getElementById(elementid)

  if (qlist.classList.contains('d-none')) {
    qlist.classList.remove('d-none')
  }
  else {
    qlist.classList.add('d-none')
  }
  console.log(correctA)
  console.log(wrongA)
}

function startToggle() {
  timer()
  qListToggle("qlist")
}


var userScore = 0
//function to collect score + show/hide next question + adjust timer count
function score() {
  //question.addEventListener("click", qListToggle)
  correctA.onclick = function() {
    userScore++;
    console.log(userScore)
  }
  wrongA.onclick = function() {
    userScore--;
    if (userScore <= 0) {
      userScore = 0;
    }
    console.log(userScore)
  }
}

function updateScore() {
  console.log("updateScore not implemented yet")
}




startGame.addEventListener("click", startToggle)
//startGame.addEventListener("click", timer)

















