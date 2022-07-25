import {
  config,
  cardSelector,
  formConfiguration,
  popupConfiguration,
  cardsContainerSelector,
  profilePopupSelector,
  newPlacePopupSelector,
  changeAvatarPopupSelector,
  imagePopupSelector,
  newPlaceFormName,
  avatarFormName,
  profileFormName,
  profileConfiguration,
  confirmPopupSelector,
} from "./constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { Api } from "../components/Api.js";
import "../pages/index.css";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithButton } from "../components/PopupWithButton.js";

const popupOpenBtn = document.querySelector(".profile__avatar-edit-button");
const popupOpenAddBtn = document.querySelector(".profile__info-add-button");
const popupOpenAvatarBtn = document.querySelector(".profile__avatar-change");

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
const handleCardDelete = (card, deleteCallback) => {
  api
    .deleteCard(card.getId())
    .then(() => {
      deleteCallback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const openConfirmPopupHandler = (card) => {
  confirmPopup.open(card);
};

const handleCardLike = (cardId, isLiked, setLikesCallback) => {
  api
    .toggleLike(cardId, isLiked)
    .then(({ likes }) => setLikesCallback(likes))
    .catch((err) => {
      console.log(err);
    });
};

function createCard(item) {
  const card = new Card(
    item,
    user.getUserId(),
    cardSelector,
    handleCardClick,
    handleCardDelete,
    openConfirmPopupHandler,
    handleCardLike
  );
  const element = card.create();
  return element;
}

const cardsContainer = new Section(createCard, cardsContainerSelector);

//USER INFO
const user = new UserInfo(profileConfiguration);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((data) => {
    user.setUserInfo(data[0]);
    cardsContainer.renderAll(data[1].reverse());
  })
  .catch((err) => {
    console.log(err);
  });

// NEW CARD POPUP

const handleCardSubmit = (item, closeCallback, captionCallback) => {
  captionCallback(true);
  api
    .addNewCard(item)
    .then((data) => {
      cardsContainer.addItem(data);
      closeCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      captionCallback(false);
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

popupOpenAddBtn.addEventListener("click", handleNewCardPopupOpen);

//PROFILE POPUP
function handleProfileformSubmit(data, closeCallback, captionCallback) {
  captionCallback(true);
  api
    .editProfile(data)
    .then((data) => {
      user.setUserInfo(data);
      closeCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      captionCallback(false);
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

popupOpenBtn.addEventListener("click", handleProfilePopupOpen);

//CONFIRM POPUP

const handlerCardDelete = (card) => {
  card.delete();
};

const confirmPopup = new PopupWithButton(
  confirmPopupSelector,
  popupConfiguration,
  formConfiguration.submitBtnSelector,
  handlerCardDelete
);
confirmPopup.setEventListeners();

// CHANGE AVATAR POPUP
const handleAvatarSubmit = (item, closeCallback, captionCallback) => {
  captionCallback(true);
  api
    .changeAvatar(item)
    .then((data) => {
      user.setUserInfo(data);
      closeCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      captionCallback(false);
    });
};

const changeAvatarPopup = new PopupWithForm(
  changeAvatarPopupSelector,
  avatarFormName,
  popupConfiguration,
  formConfiguration,
  handleAvatarSubmit,
  formValidators[avatarFormName].cleanUpForm
);
changeAvatarPopup.setEventListeners();

const handleAvatarPopupOpen = () => {
  changeAvatarPopup.open();
};

popupOpenAvatarBtn.addEventListener("click", handleAvatarPopupOpen);
