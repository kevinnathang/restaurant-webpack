import background from "../assets/background.jpg";

function menuLoad() {
  const backgroundImg = new Image();
  backgroundImg.src = background;

  const menu = document.createElement("div");
  const content = document.getElementById("content");
  content.appendChild(menu);
  menu.appendChild(backgroundImg);
}

export default menuLoad;
