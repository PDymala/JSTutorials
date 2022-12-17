
let myLeads = []
const saveButton = document.getElementById("save-button")
const saveTabButton = document.getElementById("save-tab-button")
const clearButton = document.getElementById("clear-button")
const inputForm = document.getElementById("input")
const listGroup = document.getElementById("list")


saveButton.addEventListener("click", function () {
  saveInput()
})

clearButton.addEventListener("click", function () {
  clearLeads()
})

saveTabButton.addEventListener("click", function () {
  saveTab()
})


init()



function init() {
  fillLeadArrayIfExists()
  renderLeads();
}


function saveInput() {


  fillLeadArrayIfExists()
  myLeads.push(inputForm.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads();
  inputForm.value = ""
}

function saveTab() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    fillLeadArrayIfExists()
  myLeads.push(url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads();
});

  
 
}


function fillLeadArrayIfExists() {
  if (localStorage.getItem("myLeads") != null) {
    myLeads = JSON.parse(localStorage.getItem("myLeads"))
  }
}

function clearLeads() {
  localStorage.removeItem("myLeads");
  myLeads = [];
  renderLeads();

}
function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    // listItems +=  '<li>  <a href="'+myLeads[i]+'" target="_blank">  ' + myLeads[i] + "</a> </li>"

    listItems += `
      <li>  
          <a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a> 
      </li>
     `



  }

  listGroup.innerHTML = listItems
}