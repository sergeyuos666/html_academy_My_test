const enterWindows = document.querySelector(".second-nav__login-window");
const loginEmail = document.querySelector(".login__email");
const password = document.querySelector(".login__password");
const formLogin = document.querySelector(".login-window__form");
const enterBtn = document.querySelector(".second-nav__enter");

const email = document.querySelector(".modal__form-email");
const name = document.querySelector("#modal__form-input-name");
const text = document.querySelector("#modal__form-input-text");
const formMessage = document.querySelector(".modal");
const mapFormBtn = document.querySelector(".map-secion__btn");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelectorAll(".btn-close");
const modalForm = document.querySelector(".modal__form");

let isStorageSupport = true;
let storageLogin = "";
let storageMessage = "";

try {
  storageLogin = localStorage.getItem("loginEmail");
  storageMessage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

if (enterBtn) {
  enterBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    enterWindows.classList.toggle("visually-hidden");

    if (storageLogin) {
      loginEmail.value = storageLogin;
      password.focus();
    } else {
      loginEmail.focus();
    }
  });
}

if (mapFormBtn) {
  mapFormBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    formMessage.classList.toggle("visually-hidden");
    overlay.classList.toggle("visually-hidden");

    if (storageMessage) {
      name.value = storageMessage;
      text.focus();
    } else {
      name.focus();
    }
  });
}

btnClose.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    formMessage.classList.toggle("visually-hidden");
    overlay.classList.toggle("visually-hidden");
  });
});

if (formLogin) {
  formLogin.addEventListener("submit", function (evt) {
    if (!loginEmail.value || !password.value) {
      evt.preventDefault();
      formLogin.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", loginEmail.value);
      }
    }
  });
}

if (modalForm) {
  modalForm.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      modalForm.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
      }
    }
  });
}
