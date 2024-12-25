console.log("hi");

const link = document.querySelector(".login-link");
const modalLogin = document.querySelector(".modal_login");
const modalOverlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modal_close");
let login = modalLogin.querySelector("[name=login-name]");
let password = modalLogin.querySelector("[name=login-password]");
let form = modalLogin.querySelector(".modal_login__form");
let storage = localStorage.getItem("modalLogin");

let isStorageSupport = true;

try {
  storage = localStorage.getItem("modalLogin");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.add("modal-show");
  modalOverlay.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 || keyCode) {
    evt.preventDefault();

    if (modalLogin.classList.contains("modal-show")) {
      modalLogin.classList.remove("modal-show");
      modalOverlay.classList.remove("modal-show");
    }
  }
});

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-show");
  modalLogin.classList.remove("modal-error");
});

// Form

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modalLogin.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

// contacts_btn map
// modal_map;
// modal_close_map;
