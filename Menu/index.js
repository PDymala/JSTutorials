class Dish {

  constructor(name, ingridiens, price, imageUrl) {
    this.name = name;
    this.ingridiens = ingridiens;
    this.price = price;
    this.imageUrl = imageUrl;
  }

}

const menuList = document.getElementById("menu-list")
let menu = []





init()


function init() {

  menu.push(new Dish(
    "Magnam Tiste",
    "Lorem, deren, trataro, filede, nerada",
    12.95,
    "menu-item-2.png",
  ))

  menu.push(new Dish(
    "Aut Luia",
    "Lorem, deren, trataro, filede, nerada",
    5.95,
    "menu-item-3.png",
  ))


  menu.push(new Dish(
    "Est Eligendi",
    "Lorem, deren, trataro, filede, nerada",
    14.95,
    "menu-item-1.png",
  ))

  menu.push(new Dish(
    "Eos Luibusdam",
    "Lorem, deren, trataro, filede, nerada",
    14.88,
    "menu-item-4.png",
  ))

  menu.push(new Dish(
    "Laboriosam Direva",
    "Lorem, deren, trataro, filede, nerada",
    8.95,
    "menu-item-5.png",))

    menu.push(new Dish(
      "Laboriosam Luibusdam",
      "Lorem, deren, trataro, filede, nerada",
      18.95,
      "menu-item-6.png",))

  renderMenu()

}

function renderMenu() {
  let listItems = ""
  for (let i = 0; i < menu.length; i++) {

    listItems += `

      <div class="col-lg-4 menu-item">
            <a href="${menu[i].imageUrl}" class="glightbox"><img src="${menu[i].imageUrl}" class="menu-img img-fluid" alt=""></a>
            <h4>${menu[i].name}</h4>
            <p class="ingredients">
                ${menu[i].ingridiens}
            </p>
            <p class="price">
                  $${menu[i].price}
            </p>
      </div>


     `


  }

  menuList.innerHTML = listItems
}



