class Card {
  constructor(name, link, configCard) {
    this._templateClass = configCard.templateClass;
    this._imageClass = configCard.imageClass;
    this._titleClass = configCard.titleClass;
    this._deleteClass = configCard.deleteClass;
    this._likeClass = configCard.likeClass;
    this._likeActiveClass = configCard.likeActiveClass;
    this._name = name;
    this._link = link;
    this._elementClass = configCard.elementClass;
  }

  create() {
    const elementTemplate = document.querySelector(this._templateClass).content;
    const element = elementTemplate.cloneNode(true);
    const elementImage = element.querySelector(this._imageClass);
    const elementPlaceName = element.querySelector(this._titleClass);
    const elementDeleteButton = element.querySelector(this._deleteClass);
    const elementLikeButton = element.querySelector(this._likeClass);
    elementDeleteButton.addEventListener("click", (evt) => {
      this._delete(evt);
    });
    elementLikeButton.addEventListener("click", (evt) => {
      this._like(evt);
    });
    elementImage.addEventListener("click", (evt) => {
      this._openPopup(evt);
    });
    elementImage.src = this._link;
    elementImage.alt = this._name;
    elementPlaceName.textContent = this._name;
    return element;
  }

  _delete(evt) {
    evt.target.closest(this._elementClass).remove();
  }

  _like(evt) {
    evt.target.classList.toggle(this._likeActiveClass);
  }

  _openPopup(evt) {}
}

export default Card;
