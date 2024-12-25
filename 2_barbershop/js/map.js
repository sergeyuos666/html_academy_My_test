console.log("hi");

const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal_map");
const closeBtnMap = document.querySelector(".modal_close_map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  // modalOverlay.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 || keyCode) {
    evt.preventDefault();

    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

closeBtnMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  // modalOverlay.classList.remove("modal-show");
});

// Form
