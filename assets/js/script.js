
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
      qListToggle("qlist")
    }

  }, 1000);
}

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
}

function startToggle() {
  qListToggle("qlist")
  timer()
}

//function to collect score + show/hide next question + adjust timer count
function score






startGame.addEventListener("click", startToggle)
//startGame.addEventListener("click", timer)

















