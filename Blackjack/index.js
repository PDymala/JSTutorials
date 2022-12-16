
let firstCard = 0;
let secondCard = 0;
let sum = 0;
let systemResult = 0;
newGame();

function newGame() {
  firstCard = getRndInteger(2, 11);
  secondCard = getRndInteger(2, 11);
  sum = firstCard + secondCard;
  document.getElementById("arr").textContent = firstCard + " " +  secondCard;
  document.getElementById("btn-play").disabled = false;
  document.getElementById("btn-pass").disabled = false;
  checkSum();
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function play() {
  let newCard = getRndInteger(2, 11);
  sum += newCard;
  document.getElementById("arr").textContent += (" " + newCard);
  checkSum();
  updateGUI();
}

function updateGUI() {
  document.getElementById("sum").textContent = sum;
}
function checkSum() {
  if (sum < 21) {
    document.getElementById("result").textContent = "Game on!";
  } else if (sum == 21) {
    document.getElementById("result").textContent = "You won!";
    gameStop();
  } else {
    document.getElementById("result").textContent = "You lost! :(";
    gameStop();
  }
  updateGUI();
}
function pass() {
  systemResult = getRndInteger(10, 30);
  let systemDif = 21 - systemResult;
  let userDif = 21 - sum;

  if (systemResult > 22 || systemDif < 0) {
    document.getElementById("result").textContent =
      "System: " + systemResult + " You " + sum + " | You won!";
  } else if (userDif < systemDif && systemResult < 22) {
    document.getElementById("result").textContent =
      "System: " + systemResult + " You " + sum + " | You won!";
  } else {
    document.getElementById("result").textContent =
      "System: " + systemResult + " You " + sum + " | You lost! :(";
  }
  gameStop();
}

function gameStop() {
  document.getElementById("btn-play").disabled = true;
  document.getElementById("btn-pass").disabled = true;
}