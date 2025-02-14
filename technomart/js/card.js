const modalCard = document.querySelector(".modal-card");
const modalCloseModalBtn = document.querySelector(".modal-card__close");
const cardBtnOpen = document.querySelector(".card-btn-open");

cardBtnOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCard.classList.remove("visually-hidden");
});

modalCloseModalBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCard.classList.add("visually-hidden");
});
