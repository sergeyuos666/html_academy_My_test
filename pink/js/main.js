const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
const modalError = document.querySelector(".modal-error");
const modalBtn = document.querySelector(".modal__btn");
const modalError__btn = document.querySelector(".modal-error__btn");
const formBtn = document.querySelector(".form__btn");

const firstName = document.querySelector("#first-name");
const secondName = document.querySelector("#second-name");
const therdName = document.querySelector("#therd-name");

const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea");

const nameFieldsetInput = document.querySelectorAll(
  ".form__name-fieldset input"
);
const nameFieldsetSpan = document.querySelectorAll(".form__name-fieldset span");
const contacktFieldsetInput = document.querySelectorAll(
  ".form__contackt-fieldset input"
);
const contacktFieldsetSpan = document.querySelectorAll(
  ".form__contackt-fieldset span"
);
const textareaSpan = document.querySelector(".textarea-span");

// asd

modalError__btn.addEventListener("click", function (evt) {
  modalError.classList.add("visually-hidden");
});

modalBtn.addEventListener("click", function (evt) {
  modal.classList.add("visually-hidden");
});

textarea.addEventListener("focus", function (evt) {
  textareaSpan.classList.add("visually-hidden");
});

textarea.addEventListener("blur", function (evt) {
  textareaSpan.classList.remove("visually-hidden");
});

// asd

contacktFieldsetInput.forEach((input, index) => {
  input.addEventListener("focus", () => {
    contacktFieldsetSpan[index].classList.add("visually-hidden");
  });

  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      contacktFieldsetSpan[index].classList.remove("visually-hidden");
    }
  });
});

// nameFieldsetSpan nameFieldsetInput

nameFieldsetInput.forEach((input, index) => {
  input.addEventListener("focus", () => {
    nameFieldsetSpan[index].classList.add("visually-hidden");
  });

  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      nameFieldsetSpan[index].classList.remove("visually-hidden");
    }
  });
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!firstName.value || !secondName.value || !email.value) {
    modalError.classList.remove("visually-hidden");
    modal.classList.add("visually-hidden");
  } else {
    modal.classList.remove("visually-hidden");
    modalError.classList.add("visually-hidden");
  }
});
