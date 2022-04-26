const popup = document.querySelector(".popup");
const openPopup = document.querySelector(".popup-open");
const closePopup = document.querySelector(".popup__close-button");

openPopup.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});
