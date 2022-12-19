
let currentColor = [];
var elem = document.getElementById('main-content');

init();


function init() {
  roll();
}

function roll() {
  currentColor[0] = getRndInteger(0, 255);
  currentColor[1] = getRndInteger(0, 255);
  currentColor[2] = getRndInteger(0, 255);

  updateUI();
}

function updateUI() {
  let hexColor = rgbToHex(currentColor[0], currentColor[1], currentColor[2])
  elem.style.backgroundColor = hexColor;
  document.getElementById("text-current-color").textContent = " Background color: #"+hexColor;

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rgbToHex(r, g, b) {
  return (valueToHex(r) + valueToHex(g) + valueToHex(b));

}

function valueToHex(c) {
  var hex = c.toString(16);
  return hex
}