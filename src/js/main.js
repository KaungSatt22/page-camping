import "../scss/style.scss";

let mainHeader = document.querySelector(".l-header");
let menu = document.querySelector(".l-header__hamburger");
menu.addEventListener("click", function () {
  mainHeader.classList.toggle("show");
});
