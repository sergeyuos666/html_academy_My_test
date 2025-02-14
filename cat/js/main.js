const form = document.querySelector(".form");
const inputOwner = document.querySelectorAll(".filter__form-info-owner-input");
const inputTextInfo = document.querySelector(".filter__form-textarea");
const placeholderOwner = document.querySelectorAll(
  ".filter__form-info-owner-span"
);
const placeholderTextInfo = document.querySelector(".span-placeholder");

inputOwner.forEach((input, index) => {
  input.addEventListener("focus", () => {
    placeholderOwner[index].classList.add("visually-hidden");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      placeholderOwner[index].classList.remove("visually-hidden");
    }
  });
});

inputTextInfo.addEventListener("focus", function (evt) {
  placeholderTextInfo.classList.add("visually-hidden");
});

inputTextInfo.addEventListener("blur", function (evt) {
  placeholderTextInfo.classList.remove("visually-hidden");
});
