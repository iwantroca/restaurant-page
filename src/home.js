function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createPara("My Lonely Cafe", "h1"));
  home.appendChild(
    createPara(
      "Families and friends come together to enjoy creative , delicious vegetarian meals",
      "p"
    )
  );
  home.appendChild(
    createPara("and fancy some refreshing juices and smoothies", "p")
  );

  return home;
}

function createPara(text, tag) {
  const para = document.createElement(tag);
  para.textContent = text;
  return para;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createHome());
}
export default loadHome;
