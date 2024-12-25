const BtnSlideOne = document.querySelector(".sl-1");
const BtnSlideSecond = document.querySelector(".sl-2");
const BtnSlideThertd = document.querySelector(".sl-3");

const SlideOne = document.querySelector(".st-1");
const SlideSecond = document.querySelector(".st-2");
const SlideThertd = document.querySelector(".st-3");

// Функція для скидання активних станів
function resetSlides() {
  SlideOne.classList.add("visually-hidden");
  SlideSecond.classList.add("visually-hidden");
  SlideThertd.classList.add("visually-hidden");

  BtnSlideOne.classList.remove("slide-active");
  BtnSlideSecond.classList.remove("slide-active");
  BtnSlideThertd.classList.remove("slide-active");
}

// Початковий стан (показує перший слайд)
resetSlides();
SlideOne.classList.remove("visually-hidden");
BtnSlideOne.classList.add("slide-active");

// Обробники подій
BtnSlideOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  resetSlides();
  SlideOne.classList.remove("visually-hidden");
  BtnSlideOne.classList.add("slide-active");
});

BtnSlideSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
  resetSlides();
  SlideSecond.classList.remove("visually-hidden");
  BtnSlideSecond.classList.add("slide-active");
});

BtnSlideThertd.addEventListener("click", function (evt) {
  evt.preventDefault();
  resetSlides();
  SlideThertd.classList.remove("visually-hidden");
  BtnSlideThertd.classList.add("slide-active");
});
