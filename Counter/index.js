
let count = 0;

let el = document.getElementById("count-el");

let pre = document.getElementById("previous_ent");


function increment(){

  count++;

  update();

}

 

function update(){

  el.innerText = count;

}

 

function reset(){

  count = 0;

  update();

}

 

function save(){

  pre.innerText += count + " - "

 

}

 