
let elem = document.getElementById('countdown');
const countDownDate = new Date(2023,08,30,9,0,5).getTime();

setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  elem.textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, 1000);

