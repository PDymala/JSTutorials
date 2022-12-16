
let myLeads = []
const saveButton = document.getElementById("save-button")
const inputForm = document.getElementById("input")
const listGroup = document.getElementById("list")

saveButton.addEventListener("click", function(){
  saveInput()
})

function saveInput(){
  myLeads.push(inputForm.value);
  
  // works :)
  // let li =  document.createElement("li");
  // li.appendChild(document.createTextNode(inputForm.value));    
  // listGroup.appendChild(li);
  
  //diff method
  listGroup.innerHTML += "<li>" + inputForm.value + "</li>"
  
  
}