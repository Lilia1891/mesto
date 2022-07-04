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
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import { openPopup, closePopup } from "./utils.js";
import "../pages/index.css";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

const openPopupBtn = document.querySelector(".profile__avatar-edit-button");
const openPopupAdd = document.querySelector(".profile__info-add-button");

const popupView = document.querySelector(".popup_view-image");
const closePopupView = popupView.querySelector(".popup__close-button");

//Validation
const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

// CARD

function createCard(name, link) {
  const card = new Card(name, link, cardSelector);
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
  cardsContainer.addItem(item);
};

const newCardPopup = new PopupWithForm(
  newPlacePopupSelector,
  newPlaceFormName,
  popupConfiguration,
  formConfiguration,
  handleCardSubmit
);
newCardPopup.setEventListeners();

const handleNewCardPopupOpen = () => {
  newCardPopup.open();
};

openPopupAdd.addEventListener("click", handleNewCardPopupOpen);

//USER INFO
const user = new UserInfo(profileConfiguration);
user.setUserInfo({ name: "Жак-Ив Кусто", job: "Исследователь океана" });

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
  user.getUserInfo
);
profilePopup.setEventListeners();

const handleProfilePopupOpen = () => {
  profilePopup.open();
};

openPopupBtn.addEventListener("click", handleProfilePopupOpen);

const closePopupViewHandler = (evt) => {
  closePopup(popupView);
};
closePopupView.addEventListener("click", closePopupViewHandler);
