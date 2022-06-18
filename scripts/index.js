import { initialElements, config } from "./constants.js";
import FormValidator from "./formValidator.js";

const popups = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_profile");
const openPopupBtn = document.querySelector(".profile__avatar-edit-button");
const closePopupBtn = document.querySelector(".popup__close-button");
const formProfile = document.querySelector(".popup__form");
const nameInput = formProfile.querySelector(".popup__input_type_name");
const jobInput = formProfile.querySelector(".popup__input_type_job");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-occupation");

const popupAdd = document.querySelector(".popup_add-card");
const popupAddForm = popupAdd.querySelector(".popup__add-form");
const popupAddInputName = popupAdd.querySelector(".popup__input_type_place");
const popupAddInputLink = popupAdd.querySelector(".popup__input_type_link");
const closePopupAddBtn = popupAdd.querySelector(".popup__close-button");

const openPopupAdd = document.querySelector(".profile__info-add-button");

const popupView = document.querySelector(".popup_view-image");
const popupViewImage = popupView.querySelector(".popup__image");
const popupViewTitle = popupView.querySelector(".popup__image-title");
const closePopupView = popupView.querySelector(".popup__close-button");

const elementTemplate = document.querySelector(".template-elements").content;
const elements = document.querySelector(".gallery__elements");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, form);
  formValidators[formElement.name].enableValidation();
});

popups.forEach(function (popup) {
  popup.addEventListener("mousedown", (evt) => {
    closePopup(evt.target);
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") closePopup(popup);
  });
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopupHandler(evt);
}

function openPopupHandler(evt) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
  formValidators[formProfile.name].cleanUpForm();
}

openPopupBtn.addEventListener("click", openPopupHandler);

function closePopupHandler(evt) {
  closePopup(popupProfile);
}
closePopupBtn.addEventListener("click", closePopupHandler);

formProfile.addEventListener("submit", formSubmitHandler);

const handleDeleteClick = (evt) => {
  evt.target.closest(".gallery__element").remove();
};
const handleLikeClick = (evt) => {
  evt.target.classList.toggle("gallery__element-like_active");
};
const openPopupViewHandler = (evt) => {
  popupViewImage.src = evt.target.src;
  popupViewImage.alt = evt.target.alt;
  popupViewTitle.textContent = evt.target.alt;
  openPopup(popupView);
};

const closePopupViewHandler = (evt) => {
  closePopup(popupView);
};
closePopupView.addEventListener("click", closePopupViewHandler);

function createCard(name, link) {
  const element = elementTemplate.cloneNode(true);
  const elementImage = element.querySelector(".gallery__element-image");
  const elementPlaceName = element.querySelector(".gallery__element-title");
  const elementDeleteButton = element.querySelector(".gallery__element-delete");
  const elementLikeButton = element.querySelector(".gallery__element-like");
  elementDeleteButton.addEventListener("click", handleDeleteClick);
  elementLikeButton.addEventListener("click", handleLikeClick);
  elementImage.addEventListener("click", openPopupViewHandler);
  elementImage.src = link;
  elementImage.alt = name;
  elementPlaceName.textContent = name;
  return element;
}

function renderCard(name, link) {
  const element = createCard(name, link);
  elements.prepend(element);
}

initialElements.forEach(({ name, link }) => {
  renderCard(name, link);
});

function openPopupAddHandler(evt) {
  openPopup(popupAdd);
}

openPopupAdd.addEventListener("click", openPopupAddHandler);

function closePopupAddHandler(evt) {
  closePopup(popupAdd);
}
closePopupAddBtn.addEventListener("click", closePopupAddHandler);

function submitPopupAddHandler(evt) {
  evt.preventDefault();
  const name = popupAddInputName.value;
  const link = popupAddInputLink.value;
  renderCard(name, link);
  popupAddForm.reset();
  formValidators[popupAddForm.name].cleanUpForm();
  closePopupAddHandler();
}

popupAddForm.addEventListener("submit", submitPopupAddHandler);
