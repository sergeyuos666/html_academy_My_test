document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".modal__form");
  const formPlaceholders = document.querySelectorAll(".js-placeholder");
  const formInputs = document.querySelectorAll(".js-form-input");

  // let storage = localStorage.getItem();
  // let isStorageSupport = true;
  // let storedData = {};

  // try {
  //   localStorage.getItem("error");
  // } catch (err) {
  //   isStorageSupport = false;
  // }

  // Обробка фокусу на кожному полі вводу
  formInputs.forEach((input, index) => {
    input.addEventListener("focus", function () {
      formPlaceholders[index].classList.add("visually-hidden");
    });

    input.addEventListener("blur", function () {
      // Повернення плейсхолдера, якщо поле пусте
      if (!input.value) {
        formPlaceholders[index].classList.remove("visually-hidden");
      }
    });
  });
});
