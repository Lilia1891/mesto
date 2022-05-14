const popupAdd = document.querySelector("#new-card");
const popupAddForm = popupAdd.querySelector(".popup__add-form");
const popupAddInputName = popupAdd.querySelector(".popup__input_type_name");
const popupAddInputLink = popupAdd.querySelector(".popup__input_type_link");
const closePopupAdd = popupAdd.querySelector(".popup__close-button");
const submitPopupAdd = popupAdd.querySelector(".popup__submit-button");

const openPopupAdd = document.querySelector(".profile__info-add-button");

const popupView = document.querySelector("#view-image");
const popupViewImage = popupView.querySelector(".popup__image");
const popupViewTitle = popupView.querySelector(".popup__image-title");
const closePopupView = popupView.querySelector(".popup__close-button");

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
const openPopupViewHandler = (evt) => {
  popupView.classList.add("popup_opened");
  popupViewImage.src = evt.target.src;
  popupViewImage.alt = evt.target.alt;
  popupViewTitle.textContent = evt.target.alt;
};

const closePopupViewHandler = (evt) => {
  popupView.classList.remove("popup_opened");
};
closePopupView.addEventListener("click", closePopupViewHandler);

initialElements.forEach(({ name, link }) => {
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
  elements.append(element);
});

function openPopupAddHandler(evt) {
  popupAdd.classList.add("popup_opened");
}

openPopupAdd.addEventListener("click", openPopupAddHandler);

function closePopupAddHandler(evt) {
  popupAdd.classList.remove("popup_opened");
}
closePopupAdd.addEventListener("click", closePopupAddHandler);

submitPopupAdd.addEventListener("click", submitPopupAddHandler);

function submitPopupAddHandler(evt) {
  evt.preventDefault();
  const name = popupAddInputName.value;
  const link = popupAddInputLink.value;

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
  elements.prepend(element);
  popupAddForm.reset();
  closePopupAddHandler();
}
