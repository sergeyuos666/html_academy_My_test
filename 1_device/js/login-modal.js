let popup = document.querySelector(".form_popup");
let overlay = document.querySelector(".overlay");
let closePopup = document.querySelector(".close");
let popupBtn = document.querySelector(".form_popup_btn");
let inputName = document.querySelector("[name=your-name]");
let inputEmail = document.querySelector("[name=email]");
let form = document.querySelector(".form_popup_form");
let inputText = document.querySelector("[name=info]");
let contactBtn = document.querySelector(".contact_btn");
let storage = localStorage.getItem("popup");

let isStorageSupport = true;

try {
  storage = localStorage.getItem("popup");
} catch (err) {
  isStorageSupport = false;
}

console.log(inputName);

contactBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
  overlay.classList.remove("visually-hidden");

  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27 || keyCode) {
//     evt.preventDefault();

//     if (popup.classList.contains("visually-hidden")) {
//       popup.classList.toggle("visually-hidden");
//       overlay.classList.toggle("visually-hidden");
//     }
//   }
// });

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
  modalLogin.classList.remove("modal-error");
});

// popupBtn.addEventListener("click", function (evt) {
//   evt.preventDefault();
// });

form.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputEmail.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
  if (isStorageSupport) {
    localStorage.setItem("name", inputName.value);
  }
});
