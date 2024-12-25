let catalogLik = document.querySelector(".catalog-link");
let headerCover = document.querySelector(".header__cover_color");
let headerMenuCatalog = document.querySelector(".header__menu_catalog");
let catalogSpan = document.querySelector(".catalog-span");
let catalogSecond = document.querySelector(".catalog-second");

catalogLik.addEventListener("click", function (evt) {
  evt.preventDefault();
  headerCover.classList.toggle("header_big");
  headerMenuCatalog.classList.toggle("visually-hidden");
  catalogSpan.classList.toggle("display-non");
  catalogSecond.classList.toggle("display");
});
