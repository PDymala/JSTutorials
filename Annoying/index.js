
const modalDiv = document.getElementById('modal');
const modelCloseButton = document.getElementById('modal-close');
const modelOpenButton = document.getElementById('open-button');

modelCloseButton.addEventListener("click", closeButton, false);
modelOpenButton.addEventListener("click", openButton, false);


function closeButton(){
  modalDiv.className = "invisible"
}


function openButton(){
  modalDiv.className = "visible"
}

