import { initialElements, config, cardSelector } from "./constants.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openPopup, closePopup } from "./utils.js";
import "../pages/index.css";

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
const submitPopupAddBtn = popupAdd.querySelector(".popup__submit-button");

const openPopupAdd = document.querySelector(".profile__info-add-button");

const popupView = document.querySelector(".popup_view-image");
const popupViewImage = popupView.querySelector(".popup__image");
const popupViewTitle = popupView.querySelector(".popup__image-title");
const closePopupView = popupView.querySelector(".popup__close-button");

const elementTemplate = document.querySelector(".template-elements").content;
const elements = document.querySelector(".gallery__elements");
const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

popups.forEach(function (popup) {
  popup.addEventListener("mousedown", (evt) => {
    closePopup(evt.target);
  });
});

function handleProfileformSubmit(evt) {
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

formProfile.addEventListener("submit", handleProfileformSubmit);

const closePopupViewHandler = (evt) => {
  closePopup(popupView);
};
closePopupView.addEventListener("click", closePopupViewHandler);

function renderCard(name, link) {
  const card = createCard(name, link);
  addCard(card);
}

function createCard(name, link) {
  const card = new Card(name, link, cardSelector);
  return card;
}
function addCard(card) {
  const element = card.create();
  elements.prepend(element);
}

const cardsContainer = new Section({
  items: initialElements.reverse(),
  renderer: createCard,
});

initialElements.forEach(({ name, link }) => {
  renderCard(name, link);
});

function openPopupAddHandler() {
  openPopup(popupAdd);
  formValidators[popupAddForm.name].cleanUpForm();
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
  closePopupAddHandler();
}

popupAddForm.addEventListener("submit", submitPopupAddHandler);
