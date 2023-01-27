var wordbank = ["ladder", "postoffice", "utilize"]


var win = document.getElementById("wins");
var loss = document.getElementById("losses");


var saveButton = document.getElementById("save");
var savedScore = document.getElementById("saved-win");

var word = wordbank[Math.floor(Math.random() * wordbank.length)]
console.log(word)

function timer() {

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
