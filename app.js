// Generate Dice Number
var dice = document.getElementById("dice");
var win_loss = document.getElementById("win_loss");
var dice_input = document.getElementById("dice_input");

// function generateDiceNumber() {
//   var userValue = dice_input.value;
//   if (userValue < 7) {
//     var diceNumber = Math.ceil(Math.random() * 6);
//     dice.innerText = diceNumber;
//     if (userValue == diceNumber) {
//       win_loss.innerText = "You win";
//       win_loss.style.color = "Green";
//     } else {
//       win_loss.innerText = "You loss, Try Again";
//       win_loss.style.color = "red";
//     }
//   } else {
//     win_loss.innerText = "Number sahi daalo!";
//     win_loss.style.color = "orange";
//   }
// }

function focusInput() {
  document.getElementById("input_dice").focus();
}

document.addEventListener("DOMContentLoaded", function () {
  focusInput();
});

var dice = document.getElementById("dice");
var win_loss = document.getElementById("win_loss");
var input_dice = document.getElementById("input_dice");
var turnsLeftDisplay = document.getElementById("turns_left");
var correctAttemptsDisplay = document.getElementById("correct_attempts");
var wrongAttemptsDisplay = document.getElementById("wrong_attempts");

var attempts = 0;
var correctAnswers = 0;
var turnsLeft = 10;
var congratulationShown = false;

function updateUI() {
  turnsLeftDisplay.innerText = "Turns left: " + turnsLeft;
  correctAttemptsDisplay.innerText = "Correct attempts: " + correctAnswers;
  wrongAttemptsDisplay.innerText =
    "Wrong attempts: " + (attempts - correctAnswers);
}

function gendicenumber() {
  if (attempts < 10 && correctAnswers < 3) {
    var khiladiValue = input_dice.value;
    if (khiladiValue >= 1 && khiladiValue <= 6) {
      var dicenumber = Math.ceil(Math.random() * 6);
      dice.innerText = dicenumber;
      attempts++;
      turnsLeft--;
      updateUI();
      if (khiladiValue == dicenumber) {
        correctAnswers++;
        win_loss.innerText = "You win";
        win_loss.className = "firework";
        win_loss.style.color = "Green";
        if (correctAnswers === 1 && !congratulationShown) {
          showCongratulation();
        }
      } else {
        win_loss.innerText = "Bad Luck";
        win_loss.style.color = "orange";
      }
    } else {
      win_loss.innerText = "Please enter a number between 1 and 6";
      win_loss.style.color = "red";
    }
  }

  if (correctAnswers >= 3) {
    win_loss.innerText = "Congratulations! You've won!";
    win_loss.style.color = "Green";
  } else if (attempts >= 10) {
    win_loss.innerText = "Sorry, you've lost!";
    win_loss.style.color = "Red";
  }
  input_dice.value = "";
  focusInput();
}

function showCongratulation() {
  win_loss.innerText = "Congratulations!";
  win_loss.className = "firework";
  win_loss.style.color = "Green";
  congratulationShown = true;
  setTimeout(function () {
    win_loss.innerText = "";
  }, 2000);
}

function giveReward() {
  var rewardMessage = document.createElement("p");
  rewardMessage.innerText = "Congratulations! Here's your reward: 🎁";
  rewardMessage.style.fontSize = "20px";
  rewardMessage.style.color = "blue";
  document.getElementById("game").appendChild(rewardMessage);
}


// section new game 

var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck(userNumber) {
  if (count <= 0) {
    return;
  }
  var randomNumber = Math.random() * 6;
  var ceil = Math.ceil(randomNumber);
  console.log(ceil);
  user_number.innerText = userNumber;
  random_number.innerText = ceil;

  // total count mein se aik minus krdo
  total.innerText = --count;
  
  if (ceil === userNumber) {
    console.log("user wins");
    result.innerText = "You won";
    info_box_result.style.backgroundColor = "Green";
    result.style.color = "White";
    // total count mein se aik minus krdo
    win_html.innerText = ++win;
  } else {
    result.innerText = "You Loss";
    info_box_result.style.backgroundColor = "red";
    result.style.color = "White";
    loss_html.innerText = ++loss;
  }

  checkResult();
}

function checkResult() {
  if (win >= 3) {
    message = "Congrats! You won";
    resultClass = "flashing";
  } else {
    message = "Sorry! You lost. Try again.";
    resultClass = "flashing";
  }

  msg.innerText = message;
  msg.classList.add(resultClass);

  count = 0;
  win = 0;
  loss = 0;
  total.innerText = count;
  win_html.innerText = win;
  loss_html.innerText = loss;
}
