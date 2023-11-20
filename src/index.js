import homeLoad from "./components/homeLoad";
import menuLoad from "./components/menuLoad";
import contactLoad from "./components/contactLoad";
import "./styles/styles.css";

homeLoad();

const contentContainer = document.getElementById("content");

document.getElementById("menuBtn").addEventListener("click", () => {
  contentContainer.innerHTML = "";
  menuLoad();
});

document.getElementById("homeBtn").addEventListener("click", () => {
  contentContainer.innerHTML = "";
  homeLoad();
});

document.getElementById("contactBtn").addEventListener("click", () => {
  contentContainer.innerHTML = "";
  contactLoad();
});

console.log("Hello Webpack!");
