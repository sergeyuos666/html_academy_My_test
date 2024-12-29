const catalogBtn = document.querySelector(".catalog__btn");
const catalogMenu = document.querySelector(".nav-menu__item-catalig-list");
const searchBtn = document.querySelector(".second-nav__btn_search");
const searchWindows = document.querySelector(".search-windows");
const enterBtn = document.querySelector(".second-nav__enter");
const enterWindows = document.querySelector(".second-nav__login-window");
// const enterClose = document.querySelector(".enter__close");
const basketBtn = document.querySelector(".second-nav__basket");
const basketWindows = document.querySelector(".second-nav__basket_windows");

const mapFormBtn = document.querySelector(".map-secion__btn");
const modalWindows = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnClose = document.querySelectorAll(".btn-close");

catalogBtn.addEventListener("mouseenter", function (evt) {
  evt.preventDefault();
  catalogMenu.classList.toggle("visually-hidden");
});

catalogBtn.addEventListener("mouseleave", function (evt) {
  evt.preventDefault();
  catalogMenu.classList.toggle("visually-hidden");
});

searchBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchWindows.classList.toggle("visually-hidden");
});

enterBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  enterWindows.classList.toggle("visually-hidden");
});

basketBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketWindows.classList.toggle("visually-hidden");
});

mapFormBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindows.classList.toggle("visually-hidden");
  overlay.classList.toggle("visually-hidden");
});

btnClose.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindows.classList.toggle("visually-hidden");
    overlay.classList.toggle("visually-hidden");
  });
});
