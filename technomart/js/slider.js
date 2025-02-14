const sliderBtnFirst = document.querySelectorAll(".sl-first");
const sliderBtnNext = document.querySelectorAll(".sl-next");
const slidOne = document.querySelector(".bg-sl-1"); // Виправлений клас
const slidSeconde = document.querySelector(".bg-sl-2");

// Додаємо обробники подій для кнопок "Назад"
sliderBtnFirst.forEach((btn) => {
  btn.addEventListener("click", function () {
    slidSeconde.classList.add("visually-hidden");
    slidOne.classList.remove("visually-hidden");
  });
});

// Додаємо обробники подій для кнопок "Вперед"
sliderBtnNext.forEach((btn) => {
  btn.addEventListener("click", function () {
    slidSeconde.classList.remove("visually-hidden");
    slidOne.classList.add("visually-hidden");
  });
});
