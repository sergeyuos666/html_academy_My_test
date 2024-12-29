document.addEventListener("DOMContentLoaded", function () {
  const catalogBtn = document.querySelector(".catalog__btn");
  const catalogMenu = document.querySelector(".nav-menu__item-catalig-list");
  const searchBtn = document.querySelector(".second-nav__btn_search");
  const searchWindows = document.querySelector(".search-windows");

  // const enterClose = document.querySelector(".enter__close");
  const basketBtn = document.querySelector(".second-nav__basket");
  const basketWindows = document.querySelector(".second-nav__basket_windows");

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

  basketBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketWindows.classList.toggle("visually-hidden");
  });
});
