import img from "../assets/image.jpg";

function homeLoad() {
  const image = document.createElement("img");
  image.src = img;
  image.classList.add("homeImg");
  console.log(image);

  const title = document.createElement("h1");
  title.classList.add("homeTitle");
  title.textContent = "TEPPANYAKI!";

  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.textContent = "We do not serve teppanyaki.";

  const home = document.createElement("div");
  home.classList.add("home");
  const content = document.getElementById("content");
  content.appendChild(home);

  home.appendChild(title);
  home.appendChild(image);
  home.appendChild(desc);
}

export default homeLoad;
