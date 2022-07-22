class Card {
  constructor(
    { name, link, _id, likes, owner: { _id: ownerId } },
    userId,
    cardSelector,
    handleCardClick,
    handleCardDelete,
    openConfirmPopupHandler,
    handleCardLike
  ) {
    this._templateClass = cardSelector.templateClass;
    this._imageClass = cardSelector.imageClass;
    this._titleClass = cardSelector.titleClass;
    this._deleteClass = cardSelector.deleteClass;
    this._deleteActiveClass = cardSelector.deleteActiveClass;
    this._likeClass = cardSelector.likeClass;
    this._likeActiveClass = cardSelector.likeActiveClass;
    this._likeCounter = cardSelector.likeCounter;
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isOwner = userId === ownerId;
    this._userId = userId;
    this._likes = likes;
    this._elementClass = cardSelector.elementClass;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._openConfirmPopupHandler = openConfirmPopupHandler;
    this._handleCardLike = handleCardLike;
  }

  create() {
    const element = this._createElement();
    this._setEventListeners(element);
    this._renderLikes();
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
    this._elementLikeCounter.textContent = this._likes.length;
  }

  delete() {
    this._handleCardDelete(this, () => this._deleteCard());
  }

  _deleteCard() {
    this._element.remove();
  }

  _openConfirmPopup() {
    this._openConfirmPopupHandler(this);
  }

  _like(evt) {
    this._handleCardLike(this._id, this._isLiked(), (data) => {
      console.log(data);
      this._likes = data;
      this._renderLikes();
    });
  }

  _setEventListeners(element) {
    const elementImage = element.querySelector(this._imageClass);
    const elementLikeButton = element.querySelector(this._likeClass);
    if (this._isOwner) {
      this._deleteButton.classList.add(this._deleteActiveClass);
      this._deleteButton.addEventListener("click", (evt) => {
        this._element = evt.target.closest(this._elementClass);
        this._openConfirmPopup();
      });
    }
    elementLikeButton.addEventListener("click", (evt) => {
      this._like(evt);
    });
    elementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  getId() {
    return this._id;
  }
}

export default Card;
