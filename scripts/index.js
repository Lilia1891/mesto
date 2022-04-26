const popup = document.querySelector(".popup");
const openPopup = document.querySelector(".popup-open");
const closePopup = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__occupation");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-occupation");

openPopup.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  nameProfile.textContent = nameValue;
  jobProfile.textContent = jobValue;
}

formElement.addEventListener("submit", formSubmitHandler);
