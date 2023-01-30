
var timeEl = document.getElementById("time");
const startGame = document.getElementById("startGame");
var apList = document.getElementById("")
var storedScores = JSON.parse(localStorage.getItem("userScores"));
var curUserScore;
var timerInterval;
var userScore = 0
var j = 0;
var highScores = []

//correct answer
const correctA = [document.getElementById("q1c"),
 document.getElementById("q2c"),
 document.getElementById("q3c"),
 document.getElementById("q4c")];
 //console.log(correctA)
//wrong answer
const wrongA = [document.getElementById("q1w"),
document.getElementById("q2w"),
document.getElementById("q3w"),
document.getElementById("q4w")];
//console.log(wrongA)

const qID = [document.getElementById("q1"),
 document.getElementById("q2"),
 document.getElementById("q3"),
 document.getElementById("q4")];
 //console.log(qID)

const tempTime = 20;
var secondsLeft = tempTime;
// Timer function for  countdown after clicking "Start Game" button
function timer() {
  timerInterval = setInterval(function() {
    timeEl.textContent = "GAME OVER in " + secondsLeft + " seconds.";
    secondsLeft--;
    if(secondsLeft <= -2) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      if (confirm("GAME OVER! \nYour score was " + userScore + "\n Would you like to save your score?")) {
        var initials = prompt("Please enter Initials: ")
        saveScore(initials)
                
      }
      secondsLeft = tempTime;

      outOfTime()
      qListToggle("qlist")
      //localStorage.setItem("userScore", userScore);
    }

  }, 1000);
    //score()
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
}

function startToggle() {
  timer()
  qListToggle("qlist")
  for (var i = 0; i < 2; i++) {
    score(i);
  }  
}



//function to collect score + show/hide next question + adjust timer count
function score(i) {
  //question.addEventListener("click", qListToggle)
  if (j < 4) {
    correctA[j].onclick = function() {
      userScore++;
      qListToggle(qID[j].id)
      
      if (userScore <= 4) {
        j++
        if (userScore < 4) {
          if (j < 4) {
            qListToggle(qID[j].id)
          }
        }
        if (userScore == 4) {
          secondsLeft = -2
          return
        }
        score()
      }
    }
    wrongA[j].onclick = function() {
      secondsLeft = secondsLeft - 8;
      userScore--;
    }

  }
  if (j == 4) {
    secondsLeft = -2
    return
  }
}

function saveScore(initials) {
  curUserScore = initials + " " + userScore
  if (storedScores == null) {
    storedScores = []
  }
  storedScores.push(curUserScore)
  localStorage.setItem("userScores", JSON.stringify(storedScores))
  location.reload();
}

function displayScore() {
  if (storedScores != null) {
    for (i=0; i < storedScores.length; i++) { 
      const node = document.createElement("li");
      node.className = "row justify-content-center"
      const textnode = document.createTextNode(storedScores[i]);
      node.appendChild(textnode);
      document.getElementById("highScores").appendChild(node);
    }
  }

}

displayScore()
startGame.addEventListener("click", startToggle)
















