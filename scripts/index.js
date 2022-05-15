const popup = document.querySelector(".popup");
const openPopup = document.querySelector(".profile__avatar-edit-button");
const closePopup = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-occupation");

const popupAdd = document.querySelector(".popup__add-card");
const popupAddForm = popupAdd.querySelector(".popup__add-form");
const popupAddInputName = popupAdd.querySelector(".popup__input_type_name");
const popupAddInputLink = popupAdd.querySelector(".popup__input_type_link");
const closePopupAddBtn = popupAdd.querySelector(".popup__close-button");
const submitPopupAddBtn = popupAdd.querySelector(".popup__submit-button");

const openPopupAdd = document.querySelector(".profile__info-add-button");

const popupView = document.querySelector("#view-image");
const popupViewImage = popupView.querySelector(".popup__image");
const popupViewTitle = popupView.querySelector(".popup__image-title");
const closePopupView = popupView.querySelector(".popup__close-button");

const elementTemplate = document.querySelector(".template-elements").content;
const elements = document.querySelector(".gallery__elements");

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  nameProfile.textContent = nameValue;
  jobProfile.textContent = jobValue;
  closePopupHandler(evt);
}

function openPopupHandler(evt) {
  popup.classList.add("popup_opened");
  const nameValue = nameProfile.textContent;
  nameInput.value = nameValue;
  const jobValue = jobProfile.textContent;
  jobInput.value = jobValue;
}

openPopup.addEventListener("click", openPopupHandler);

function closePopupHandler(evt) {
  popup.classList.remove("popup_opened");
}
closePopup.addEventListener("click", closePopupHandler);

formElement.addEventListener("submit", formSubmitHandler);

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
closePopupAddBtn.addEventListener("click", closePopupAddHandler);

submitPopupAddBtn.addEventListener("click", submitPopupAddHandler);

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
