
var timeEl = document.getElementById("time");
const startGame = document.getElementById("startGame");

const tempTime = 5;
var secondsLeft = tempTime;
// Timer function for  countdown after clicking "Start Game" button
function timer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "GAME OVER in " + secondsLeft + " seconds.";
 
    if(secondsLeft === -1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      alert("GAME OVER!");
      secondsLeft = tempTime;

      outOfTime()
    }

  }, 1000);
}

function outOfTime() {
  timeEl.textContent = " ";
}

var question = document.getElementById("question-container");

function showQuestion() {
  
}








startGame.addEventListener("click", timer)

















