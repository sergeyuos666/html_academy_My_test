const minElement = document.querySelector(".js-min");
const maxElement = document.querySelector(".js-max");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");

inputMin.addEventListener("input", function (evt) {
  minElement.textContent = inputMin.value;
});

inputMax.addEventListener("input", function (evt) {
  maxElement.textContent = inputMax.value;
});
