const mainContent = document.querySelector("#content");
console.log(mainContent);

function createHeader() {
  const header = document.createElement("header");
  header.appendChild(createHeadTitle());
  header.appendChild(createNav());
  return header;
}

function createHeadTitle() {
  const headTitle = document.createElement("h1");
  headTitle.textContent = "My Lonely Cafe";
  headTitle.style.textAlign = "center";
  return headTitle;
}
function createNav() {
  const navBar = document.createElement("nav");
  const home = document.createElement("p");
  const about = document.createElement("p");
  const menu = document.createElement("p");
  home.textContent = "home";
  about.textContent = "about";
  menu.textContent = "menu";
  navBar.append(home);
  navBar.append(about);
  navBar.append(menu);
  return navBar;
}
mainContent.appendChild(createHeader());
