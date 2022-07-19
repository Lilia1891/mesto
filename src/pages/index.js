import {
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
import { Api } from "../components/Api.js";
import "../pages/index.css";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const openPopupBtn = document.querySelector(".profile__avatar-edit-button");
const openPopupAdd = document.querySelector(".profile__info-add-button");

//API

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-45",
  headers: {
    authorization: "636cc495-c287-427c-9f35-3c6c6a44b827",
    "Content-Type": "application/json",
  },
});

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
    items: [],
    renderer: createCard,
  },
  cardsContainerSelector
);

api.getInitialCards().then((data) => {
  cardsContainer.setItems(data);
  cardsContainer.renderAll();
});

// NEW CARD POPUP

const handleCardSubmit = (item) => {
  api.addNewCard(item).then((data) => {
    console.log(data);
    cardsContainer.addItem(data.name, data.link);
  });
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
api.getUserInfo().then((data) => {
  user.setUserInfo({ title: data.name, job: data.about, avatar: data.avatar });
});

//PROFILE POPUP
function handleProfileformSubmit(data) {
  api.editProfile(data).then((data) => {
    user.setUserInfo({
      title: data.name,
      job: data.about,
      avatar: data.avatar,
    });
  });
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
