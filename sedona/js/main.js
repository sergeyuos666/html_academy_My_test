document.addEventListener("DOMContentLoaded", function () {
  const dateFormEnterBtn = document.querySelector(".describe__btn");
  const modalWindow = document.querySelector(".modal");

  const plus = document.querySelector(".plus");
  const caunt = document.querySelector(".caunt");
  const minus = document.querySelector(".minus");

  const childrenPlus = document.querySelector(".children__plus");
  const childrenCaunt = document.querySelector(".children__caunt");
  const childrenMinus = document.querySelector(".children__minus");

  let value = 0;
  let clValue = 0;

  // Універсальна функція для оновлення лічильників
  function updateCounter(isIncrement, counterValue, counterDisplay) {
    if (isIncrement) {
      counterValue += 1;
    } else {
      if (counterValue > 0) counterValue -= 1; // Запобігаємо негативним значенням
    }
    counterDisplay.textContent = counterValue;
    return counterValue;
  }

  // Закриття модального вікна
  function closeModal() {
    modalWindow.classList.add("visually-hidden");
  }

  // Відкриття/закриття модального вікна
  dateFormEnterBtn.addEventListener("click", function () {
    modalWindow.classList.toggle("visually-hidden");
  });

  // Закриваємо модальне вікно при кліці за його межі
  modalWindow.addEventListener("click", function (evt) {
    if (!modalWindow.querySelector(".modal-content").contains(evt.target)) {
      closeModal();
    }
  });
  // Додаємо обробники для лічильників
  plus.addEventListener("click", function () {
    value = updateCounter(true, value, caunt);
  });

  minus.addEventListener("click", function () {
    value = updateCounter(false, value, caunt);
  });

  childrenPlus.addEventListener("click", function () {
    clValue = updateCounter(true, clValue, childrenCaunt);
  });

  childrenMinus.addEventListener("click", function () {
    clValue = updateCounter(false, clValue, childrenCaunt);
  });
});
