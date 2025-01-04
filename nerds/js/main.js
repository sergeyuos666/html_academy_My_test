const modalWindow = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

const modalForm = document.querySelector(".modal__form");
const inputName = document.querySelector("#modal__name");
const inputEmail = document.querySelector("#modal__email");
const inputTextarea = document.querySelector("#modal__textarea");
const FormBtn = document.querySelector("#modal__btn");
const namePleceholder = document.querySelector(".modal__name-placeholder");
const inputs = document.querySelectorAll(".modal__input, .modal__textarea");
const contactBtn = document.querySelector(".contact-btn");

let storage = localStorage.getItem("modalForm");
let isStorageSupport = true;
let storedData = {};

try {
  localStorage.getItem("test");
} catch (err) {
  isStorageSupport = false;
}

// Відкрити модальне вікно
contactBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove("visually-hidden");

  // Завантаження значень з localStorage
  if (isStorageSupport) {
    inputs.forEach(function (input) {
      const storedValue = localStorage.getItem(input.id);
      if (storedValue) {
        input.value = storedValue;
        togglePlaceholder(input);
      }
    });
  }

  // Фокус на перше поле
  inputs[0].focus();
});

// Закрити модальне вікно
modalCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.add("visually-hidden");
});

// Приховування плейсхолдерів під час вводу
inputs.forEach(function (input) {
  const placeholder = input.nextElementSibling;

  togglePlaceholder(input); // Перевіряємо одразу

  input.addEventListener("input", function () {
    togglePlaceholder(input);

    // Збереження значень у localStorage
    if (isStorageSupport) {
      localStorage.setItem(input.id, input.value);
    }
  });

  function togglePlaceholder(input) {
    if (input.value !== "") {
      placeholder.classList.add("hidden");
    } else {
      placeholder.classList.remove("hidden");
    }
  }
});

// Відправка форми
modalForm.addEventListener("submit", function (evt) {
  if (!inputs[0].value || !inputs[1].value) {
    evt.preventDefault();
    modalWindow.classList.add("modal-error"); // Показуємо помилку
  } else {
    if (isStorageSupport) {
      inputs.forEach(function (input) {
        localStorage.setItem(input.id, input.value);
      });
    }
  }
});
