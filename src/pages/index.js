import {
  initialElements,
  config,
  cardSelector,
  formConfiguration,
  popupConfiguration,
  cardsContainerSelector,
  profilePopupSelector,
  newPlacePopupSelector,
  imagePopupSelector,
  newPlaceFormName,
  profileFormName,
  profileConfiguration,
} from "./constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";

import "../pages/index.css";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const openPopupBtn = document.querySelector(".profile__avatar-edit-button");
const openPopupAdd = document.querySelector(".profile__info-add-button");

//Validation
const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

// CARD
const popupView = new PopupWithImage(imagePopupSelector, popupConfiguration);
popupView.setEventListeners();

const handleCardClick = (name, link) => {
  popupView.open(name, link);
};

function createCard(name, link) {
  const card = new Card(name, link, cardSelector, handleCardClick);
  const element = card.create();
  return element;
}

const cardsContainer = new Section(
  {
    items: initialElements,
    renderer: createCard,
  },
  cardsContainerSelector
);

cardsContainer.renderAll();

// NEW CARD POPUP

const handleCardSubmit = (item) => {
  cardsContainer.addItem(item.place, item.link);
};

const newCardPopup = new PopupWithForm(
  newPlacePopupSelector,
  newPlaceFormName,
  popupConfiguration,
  formConfiguration,
  handleCardSubmit,
  formValidators[newPlaceFormName].cleanUpForm
);
newCardPopup.setEventListeners();

const handleNewCardPopupOpen = () => {
  newCardPopup.open();
};

openPopupAdd.addEventListener("click", handleNewCardPopupOpen);

//USER INFO
const user = new UserInfo(profileConfiguration);
user.setUserInfo({ title: "Жак-Ив Кусто", job: "Исследователь океана" });

//PROFILE POPUP
function handleProfileformSubmit(data) {
  user.setUserInfo(data);
}

const profilePopup = new PopupWithForm(
  profilePopupSelector,
  profileFormName,
  popupConfiguration,
  formConfiguration,
  handleProfileformSubmit,
  formValidators[profileFormName].cleanUpForm,
  user.getUserInfo
);
profilePopup.setEventListeners();

const handleProfilePopupOpen = () => {
  profilePopup.open();
};

openPopupBtn.addEventListener("click", handleProfilePopupOpen);
