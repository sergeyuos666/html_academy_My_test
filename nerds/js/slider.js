const slideOne = document.querySelector(".sl-1");
const slideSecond = document.querySelector(".sl-2");
const slideThird = document.querySelector(".sl-3");
const slideBtnOne = document.querySelector(".sl-btn-1");
const slideBtnSecond = document.querySelector(".sl-btn-2");
const slideBtnThird = document.querySelector(".sl-btn-3");

slideBtnOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideOne.classList.remove("visually-hidden");
  slideSecond.classList.add("visually-hidden");
  slideThird.classList.add("visually-hidden");
  slideBtnOne.classList.add("btn-sl-cheked");
  slideBtnSecond.classList.remove("btn-sl-cheked");
  slideBtnThird.classList.remove("btn-sl-cheked");
});

slideBtnSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideOne.classList.add("visually-hidden");
  slideSecond.classList.remove("visually-hidden");
  slideThird.classList.add("visually-hidden");
  slideBtnOne.classList.remove("btn-sl-cheked");
  slideBtnSecond.classList.add("btn-sl-cheked");
  slideBtnThird.classList.remove("btn-sl-cheked");
});

slideBtnThird.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideOne.classList.add("visually-hidden");
  slideSecond.classList.add("visually-hidden");
  slideThird.classList.remove("visually-hidden");
  slideBtnOne.classList.remove("btn-sl-cheked");
  slideBtnSecond.classList.remove("btn-sl-cheked");
  slideBtnThird.classList.add("btn-sl-cheked");
});
