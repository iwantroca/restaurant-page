import loadHome from "./home";
import loadMenu from "./menu";

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
  const home = document.createElement("button");
  const about = document.createElement("button");
  const menu = document.createElement("button");
  home.textContent = "home";
  about.textContent = "about";
  menu.textContent = "menu";
  navBar.append(home);
  navBar.append(menu);
  navBar.append(about);
  home.addEventListener("click", loadHome);
  menu.addEventListener("click", loadMenu);
  return navBar;
}
function createMain() {
  const mainBody = document.createElement("main");
  return mainBody;
}
function renderSite() {
  const mainContent = document.querySelector("#content");
  mainContent.appendChild(createHeader());
  mainContent.appendChild(createMain());
  loadHome();
}
export default renderSite;
