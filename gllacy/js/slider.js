document.addEventListener("DOMContentLoaded", function () {
  const sliderBtnFirst = document.querySelector(".sl-1");
  const sliderBtnSecond = document.querySelector(".sl-2");
  const sliderBtnTherd = document.querySelector(".sl-3");

  const sliderFirst = document.querySelector(".ls-1");
  const sliderSecond = document.querySelector(".ls-2");
  const sliderTherd = document.querySelector(".ls-3");

  sliderBtnFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.remove("visually-hidden");
    sliderSecond.classList.add("visually-hidden");
    sliderTherd.classList.add("visually-hidden");

    sliderBtnFirst.classList.add("checked-slide");
    sliderBtnSecond.classList.remove("checked-slide");
    sliderBtnTherd.classList.remove("checked-slide");
  });

  sliderBtnSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.add("visually-hidden");
    sliderSecond.classList.remove("visually-hidden");
    sliderTherd.classList.add("visually-hidden");

    sliderBtnFirst.classList.remove("checked-slide");
    sliderBtnSecond.classList.add("checked-slide");
    sliderBtnTherd.classList.remove("checked-slide");
  });

  sliderBtnTherd.addEventListener("click", function (evt) {
    evt.preventDefault();

    sliderFirst.classList.add("visually-hidden");
    sliderSecond.classList.add("visually-hidden");
    sliderTherd.classList.remove("visually-hidden");

    sliderBtnFirst.classList.remove("checked-slide");
    sliderBtnSecond.classList.remove("checked-slide");
    sliderBtnTherd.classList.add("checked-slide");
  });
});
