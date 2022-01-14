function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createPara("hey this is my world"));
  return home;
}

function createPara(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

function loadHome() {
  const main = document.querySelector("main");
  main.appendChild(createHome());
}
export default loadHome;
