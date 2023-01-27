


var secondsLeft = 60;

// Timer function for  countdown after clicking "Start Game" button
function timer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}




function saveScore() {
  // Save related form data as an object
  var score = {
    win: win.value,
    loss: loss.value
};
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("score", JSON.stringify(score));
}

function renderScore() {
  // Use JSON.parse() to convert text to JavaScript object
  var saveScore = JSON.parse(localStorage.getItem("savedScore"));
    //var saveScore = wordbank[1];

  // Check if data is returned, if not exit out of the function
  if (saveScore !== null) {
  document.getElementById("wins").innerHTML = saveScore.win;
  document.getElementById("loss").innerHTML = saveScore.loss;
} else {
    return;
  }
}

var passwordText = document.querySelector("#guessWord");

passwordText.value = word;

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderScore function will also execute
  renderScore();
}
init();
