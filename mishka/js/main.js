const modalWindows = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const goodsButton = document.querySelector(".week-goods__button");
const processBtn = document.querySelector(".process__btn");

// Функція закриття модального вікна
function closeModal() {
  if (!modalWindows.classList.contains("visually-hidden")) {
    modalWindows.classList.add("visually-hidden");
    overlay.classList.add("visually-hidden");
  }
}

// Відкриття модального вікна при кліку на кнопки
if (goodsButton) {
  goodsButton.addEventListener("click", function () {
    modalWindows.classList.remove("visually-hidden");
    overlay.classList.remove("visually-hidden");
  });
}

if (processBtn) {
  processBtn.addEventListener("click", function () {
    modalWindows.classList.remove("visually-hidden");
    overlay.classList.remove("visually-hidden");
  });
}

// Закриття при кліку на оверлей
if (overlay) {
  overlay.addEventListener("click", closeModal);
}

// Закриття при натисканні Escape
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    closeModal();
  }
});
