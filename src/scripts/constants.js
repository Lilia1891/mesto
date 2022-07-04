export const initialElements = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
  inputError: `.popup__input-error_`,
};

export const cardSelector = {
  templateClass: ".template-elements",
  imageClass: ".gallery__element-image",
  titleClass: ".gallery__element-title",
  deleteClass: ".gallery__element-delete",
  likeClass: ".gallery__element-like",
  likeActiveClass: "gallery__element-like_active",
  elementClass: ".gallery__element",
};

export const formConfiguration = {
  inputSelector: ".popup__input",
  submitBtnSelector: "popup__submit-button",
  formSelector: ".popup__form",
};

export const popupConfiguration = {
  activeModifier: "popup_opened",
  closeBtnSelector: "popup__close-button",
};

export const cardsContainerSelector = "gallery__elements";
export const profilePopupSelector = ".popup_profile";
export const newPlacePopupSelector = ".popup_add-card";
export const imagePopupSelector = ".popup_view-image";
export const newPlaceFormName = "popup__add-form";
export const profileFormName = "form";

export const profileConfiguration = {
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-occupation",
};
