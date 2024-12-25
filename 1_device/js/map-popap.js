let mapPopup = document.querySelector(".map_popup");
let closeMapPopup = document.querySelector(".map_popup_btn");
let mapLink = document.querySelector(".map-link");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("visually-hidden");
});

closeMapPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("visually-hidden");
});
