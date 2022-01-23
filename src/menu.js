function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(
    createMenuItem(
      "Burger Combo",
      "Cheese Burger with crispy fries and pickle",
      "./images/Foods/r01.jpg"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Baked cheese and tomato pizzaa",
      "Cheesy pizza with tomatoes and various veggies",
      "./images/Foods/r02.jpg"
    )
  );
  menu.appendChild(
    createMenuItem(
      "White Pasta",
      "Creamy Pasta made with fresh veggies",
      "./images/Foods/r03.jpg"
    )
  );
  return menu;
}

function createMenuItem(item, description, picAdr) {
  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("menu-item");

  const itemName = document.createElement("h3");
  itemName.textContent = item;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;

  const foodImage = new Image();
  foodImage.src = picAdr;

  itemWrapper.appendChild(foodImage);
  itemWrapper.appendChild(itemName);
  itemWrapper.appendChild(itemDescription);
  return itemWrapper;
}

function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createMenu());
}
export default loadMenu;
