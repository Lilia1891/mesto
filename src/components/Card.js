class Card {
  constructor(
    { name, link, _id, likes, owner: { _id: ownerId } },
    userId,
    cardSelector,
    handleCardClick
  ) {
    this._templateClass = cardSelector.templateClass;
    this._imageClass = cardSelector.imageClass;
    this._titleClass = cardSelector.titleClass;
    this._deleteClass = cardSelector.deleteClass;
    this._likeClass = cardSelector.likeClass;
    this._likeActiveClass = cardSelector.likeActiveClass;
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isOwner = userId === ownerId;
    this._userId = userId;
    this._likes = likes;
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
    this._elementLikeButton = element.querySelector(this._likeClass);
    this._elementLikeCounter = element.querySelector(this._likeCounter);
    this._deleteButton = element.querySelector(this._deleteClass);
    elementImage.src = this._link;
    elementImage.alt = this._name;
    elementPlaceName.textContent = this._name;

    return element;
  }

  _isLiked() {
    return this._likes.map((item) => item._id).includes(this._userId);
  }

  _renderLikes() {
    if (this._isLiked()) {
      this._elementLikeButton.classList.add(this._likeActiveClass);
    } else {
      this._elementLikeButton.classList.remove(this._likeActiveClass);
    }
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
    if (this._isOwner) {
      elementDeleteButton.addEventListener("click", (evt) => {
        this._delete(evt);
      });
    }
    elementLikeButton.addEventListener("click", (evt) => {
      this._like(evt);
    });
    elementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

export default Card;
