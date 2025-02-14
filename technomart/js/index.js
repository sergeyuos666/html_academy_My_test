const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".contact__btn");
const closeModalBtn = document.querySelector(".modal__close");

// const modal = document.querySelector("");
// const modal = document.querySelector("");

openModalBtn.addEventListener("click", function (evt) {
  modal.classList.remove("visually-hidden");
});

closeModalBtn.addEventListener("click", function (evt) {
  modal.classList.add("visually-hidden");
});
