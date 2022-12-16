
let rolls = [];

function roll() {
  rolls[0] = getRndInteger(1, 7);
  rolls[1] = getRndInteger(1, 7);
  updateUI();
}

function updateUI() {
  document.getElementById("rolls").textContent = "";
  rolls.forEach(printt);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function printt(item) {
  document.getElementById("rolls").textContent += (item + " ");
}