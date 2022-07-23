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
  likeCounter: ".gallery__element-like-counter",
  likeActiveClass: "gallery__element-like_active",
  elementClass: ".gallery__element",
  deleteActiveClass: "gallery__element-delete_displayed",
};

export const formConfiguration = {
  inputSelector: ".popup__input",
  submitBtnSelector: ".popup__submit-button",
  formSelector: ".popup__form",
  activeCaption: "Сохранение...",
};

export const popupConfiguration = {
  activeModifier: "popup_opened",
  closeBtnSelector: "popup__close-button",
};

export const cardsContainerSelector = ".gallery__elements";
export const profilePopupSelector = ".popup_profile";
export const newPlacePopupSelector = ".popup_add-card";
export const changeAvatarPopupSelector = ".popup_avatar";
export const imagePopupSelector = ".popup_view-image";
export const newPlaceFormName = "popup__add-form";
export const avatarFormName = "avatar-form";
export const confirmPopupSelector = ".popup_confirm";
export const profileFormName = "form";

export const profileConfiguration = {
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-occupation",
  avatarSelector: ".profile__avatar",
};
