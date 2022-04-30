const popup = document.querySelector(".popup");
const openPopup = document.querySelector(".profile__avatar-edit-button");
const closePopup = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-occupation");

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  nameProfile.textContent = nameValue;
  jobProfile.textContent = jobValue;
}
function openPopupHandler(evt) {
  popup.classList.add("popup_opened");
  const nameValue = nameProfile.textContent;
  nameInput.value = nameValue;
  const jobValue = jobProfile.textContent;
  jobInput.value = jobValue;
}

openPopup.addEventListener("click", openPopupHandler);

function closePopupHandler(evt) {
  popup.classList.remove("popup_opened");
}
closePopup.addEventListener("click", closePopupHandler);

formElement.addEventListener("submit", formSubmitHandler);
