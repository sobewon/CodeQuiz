
var timeEl = document.getElementById("time");
const startGame = document.getElementById("startGame");

var timerInterval;
var userScore = 0
j = 0;

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
      alert("GAME OVER!");
      secondsLeft = tempTime;

      outOfTime()
      qListToggle("qlist")
    }

  }, 1000);
    //score()
    console.log("score ran")
}

//function to clear timer
function outOfTime() {
  timeEl.textContent = " ";
}

var question = document.getElementById("question-container");

function qListToggle(elementid) {
  var qlist = document.getElementById(elementid)
  //console.log(qlist)

  if (qlist.classList.contains('d-none')) {
    qlist.classList.remove('d-none')
  }
  else {
    qlist.classList.add('d-none')
  }
  //console.log(correctA)
  //console.log(wrongA)
}

function startToggle() {
  timer()
  qListToggle("qlist")
  for (var i = 0; i < 2; i++) {
    score(i, timerInterval);
    console.log(i + " ran")
  }  
  console.log("running")
}



//function to collect score + show/hide next question + adjust timer count
function score(i, timerInterval) {
  //question.addEventListener("click", qListToggle)
  if (j < 4) {
    console.log(i)
    correctA[j].onclick = function() {
      userScore++;
      //console.log(j + " istart")
      //console.log(userScore + " us")
      //console.log(correctA[j].id + " curCA ID")
      //console.log(qID[j].id + " cur qID ID")
      qListToggle(qID[j].id)
      
      if (userScore <= 4) {
        j++
        console.log(j + "F")
        if (userScore < 4) {
          if (j < 4) {
            qListToggle(qID[j].id)
            console.log(userScore)
          }
        }
        if (userScore == 4) {
          console.log(userScore)
          return
        }
        score()
      }
      
      //return i;
    }
    wrongA[j].onclick = function() {
      //clearInterval(timerInterval);
      secondsLeft = secondsLeft - 8;
      userScore--;
      console.log(userScore)
    }
    console.log(i)
  }
}

function showScore() {
  console.log("showScore not implemented yet")
}




startGame.addEventListener("click", startToggle)
//startGame.addEventListener("click", timer)

















