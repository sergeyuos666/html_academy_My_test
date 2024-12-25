const secondBtnSlideOne = document.querySelector(".sts-1");
const secondBtnSlideSecond = document.querySelector(".sts-2");
const secondBtnSlideThertd = document.querySelector(".sts-3");

const secondSlideOne = document.querySelector(".stsl-1");
const secondSlideSecond = document.querySelector(".stsl-2");
const secondSlideThertd = document.querySelector(".stsl-3");

// Функція для скидання активних станів
function resetSlides2() {
  secondSlideOne.classList.add("visually-hidden");
  secondSlideSecond.classList.add("visually-hidden");
  secondSlideThertd.classList.add("visually-hidden");

  secondBtnSlideOne.classList.remove("slide-second-active");
  secondBtnSlideSecond.classList.remove("slide-second-active");
  secondBtnSlideThertd.classList.remove("slide-second-active");
}

// Початковий стан (показує перший слайд)
resetSlides2();
secondSlideOne.classList.remove("visually-hidden");
secondBtnSlideOne.classList.add("slide-second-active");

// Обробники подій
secondBtnSlideOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  resetSlides2();
  secondSlideOne.classList.remove("visually-hidden");
  secondBtnSlideOne.classList.add("slide-second-active");
});

secondBtnSlideSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
  resetSlides2();
  secondSlideSecond.classList.remove("visually-hidden");
  secondBtnSlideSecond.classList.add("slide-second-active");
});

secondBtnSlideThertd.addEventListener("click", function (evt) {
  evt.preventDefault();
  resetSlides2();
  secondSlideThertd.classList.remove("visually-hidden");
  secondBtnSlideThertd.classList.add("slide-second-active");
});
