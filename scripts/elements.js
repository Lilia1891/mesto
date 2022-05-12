const popupAdd = document.querySelector("#new-card");
const addElement = popupAdd.querySelector(".popup__add-form");
const cardName = popupAdd.querySelector(".popup__input_type_name");
const cardLink = popupAdd.querySelector(".popup__input_type_link");
const closeAdd = popupAdd.querySelector(".popup__close-button");
const submitAdd = popupAdd.querySelector(".popup__submit-button");

const openAdd = document.querySelector(".profile__info-add-button");

const popupView = document.querySelector(".popup__view-image");
const imageView = popupView.querySelector(".popup__image");
const imageTitle = popupView.querySelector(".popup__image-title");
const closeView = popupView.querySelector(".popup__close-button");

const initialElements = [
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

const elementTemplate = document.querySelector(".template-elements").content;
const elements = document.querySelector(".gallery__elements");
const handleDeleteClick = (evt) => {
  evt.target.closest(".gallery__element").remove();
};
const handleLikeClick = (evt) => {
  evt.target.classList.toggle("gallery__element-like_active");
};

initialElements.forEach(({ name, link }) => {
  const element = elementTemplate.cloneNode(true);
  const elementImage = element.querySelector(".gallery__element-image");
  const elementPlaceName = element.querySelector(".gallery__element-title");
  const elementDeleteButton = element.querySelector(".gallery__element-delete");
  const elementLikeButton = element.querySelector(".gallery__element-like");
  elementDeleteButton.addEventListener("click", handleDeleteClick);
  elementLikeButton.addEventListener("click", handleLikeClick);
  elementImage.src = link;
  elementImage.alt = name;
  elementPlaceName.textContent = name;
  elements.append(element);
});

function openPopupAddHandler(evt) {
  popupAdd.classList.add("popup_opened");
}

openAdd.addEventListener("click", openPopupAddHandler);

function closePopupAddHandler(evt) {
  popupAdd.classList.remove("popup_opened");
}
closeAdd.addEventListener("click", closePopupAddHandler);

submitAdd.addEventListener("click", submitPopupAddHandler);

function submitPopupAddHandler(evt) {
  evt.preventDefault();
  const name = cardName.value;
  const link = cardLink.value;

  const element = elementTemplate.cloneNode(true);
  const elementImage = element.querySelector(".gallery__element-image");
  const elementPlaceName = element.querySelector(".gallery__element-title");
  const elementDeleteButton = element.querySelector(".gallery__element-delete");
  const elementLikeButton = element.querySelector(".gallery__element-like");
  elementDeleteButton.addEventListener("click", handleDeleteClick);
  elementLikeButton.addEventListener("click", handleLikeClick);
  elementImage.src = link;
  elementImage.alt = name;
  elementPlaceName.textContent = name;
  elements.prepend(element);
  addElement.reset();
  closePopupAddHandler();
}
