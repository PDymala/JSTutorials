let myList = []
let edit = false;
const input = document.getElementById("input")
const button = document.getElementById("button")
const list = document.getElementById("list")
const alert = document.getElementById("alert")
const clearText = document.getElementById("clear-text")

button.addEventListener("click", buttonHandler, false);
clearText.addEventListener("click", clearListHandler, false);


init();


function buttonHandler(){
  if(edit){
    editItem();  
  } else{
    addItem();
  }
  renderList();
}


function clearListHandler(){
  clearList();
  renderList();
}


function init(){
  fillListIfExist()
  renderList();
}

function addItem(){

  fillListIfExist()  
  myList.push(input.value);
  localStorage.setItem("todoList", JSON.stringify(myList));
  input.value = "";
  alertMsg("Item added")
}



function fillListIfExist() {
  if (localStorage.getItem("todoList") != null) {
    myList = JSON.parse(localStorage.getItem("todoList"))
  }
}

function renderList() {
  list.innerHTML = ""
  
  for (let i = 0; i < myList.length; i++) {

  const node = document.createElement("li");  
  const textnode = document.createTextNode(myList[i]);
  node.appendChild(textnode);
  list.appendChild(node);

  const btn = document.createElement("button");
  btn.id = "btnItems";
  btn.textContent = "X"
  btn.className = "btn btn-danger m-2 float-end"
  btn.onclick = function(el) {
      // fillListIfExist() 
    myList.splice(i,1);
    // 
    localStorage.setItem("todoList", JSON.stringify(myList));
    alertMsg("Item removed")
    renderList();
    node.remove()
    textnode.remove()
    btn.remove()
  }

    node.appendChild(btn)

  }
  

}


function clearList() {
  localStorage.removeItem("todoList");
  myList = [];
  alertMsg("List cleared")
}

function alertMsg(text){

  alert.innerHTML = 
  `
  <div class="alert alert-success" >
  ${text}
</div>
  
  `

}