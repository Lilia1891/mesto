class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._templateClass = cardSelector.templateClass;
    this._imageClass = cardSelector.imageClass;
    this._titleClass = cardSelector.titleClass;
    this._deleteClass = cardSelector.deleteClass;
    this._likeClass = cardSelector.likeClass;
    this._likeActiveClass = cardSelector.likeActiveClass;
    this._name = name;
    this._link = link;
    this._elementClass = cardSelector.elementClass;
    this._handleCardClick = handleCardClick;
  }

  create() {
    const element = this._createElement();
    this._setEventListeners(element);
    return element;
  }

  _createElement() {
    const elementTemplate = document.querySelector(this._templateClass).content;
    const element = elementTemplate.cloneNode(true);
    const elementPlaceName = element.querySelector(this._titleClass);
    const elementImage = element.querySelector(this._imageClass);
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

  _setEventListeners(element) {
    const elementImage = element.querySelector(this._imageClass);
    const elementDeleteButton = element.querySelector(this._deleteClass);
    const elementLikeButton = element.querySelector(this._likeClass);
    elementDeleteButton.addEventListener("click", (evt) => {
      this._delete(evt);
    });
    elementLikeButton.addEventListener("click", (evt) => {
      this._like(evt);
    });
    elementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

export default Card;
