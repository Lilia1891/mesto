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

const popupProfile = document.querySelector(".popup_profile");
const openPopupBtn = document.querySelector(".profile__avatar-edit-button");
const closePopupBtn = document.querySelector(".popup__close-button");

const popupAdd = document.querySelector(".popup_add-card");
const popupAddForm = popupAdd.querySelector(".popup__add-form");
const popupAddInputName = popupAdd.querySelector(".popup__input_type_place");
const popupAddInputLink = popupAdd.querySelector(".popup__input_type_link");
const closePopupAddBtn = popupAdd.querySelector(".popup__close-button");

const openPopupAdd = document.querySelector(".profile__info-add-button");

const popupView = document.querySelector(".popup_view-image");

const closePopupView = popupView.querySelector(".popup__close-button");

const elements = document.querySelector(".gallery__elements");
const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

function closePopupHandler(evt) {
  closePopup(popupProfile);
}
closePopupBtn.addEventListener("click", closePopupHandler);

//formProfile.addEventListener("submit", handleProfileformSubmit);

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

const cardsContainer = new Section(
  {
    items: initialElements,
    renderer: createCard,
  },
  cardsContainerSelector
);

const handleCardSubmit = (item) => {
  cardsContainer.addItem(item);
};

const user = new UserInfo(profileConfiguration);
user.setUserInfo({ name: "Жак-Ив Кусто", job: "Исследователь океана" });

const newCardPopup = new PopupWithForm(
  newPlacePopupSelector,
  newPlaceFormName,
  popupConfiguration,
  formConfiguration,
  handleCardSubmit
);
newCardPopup.setEventListeners();

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
