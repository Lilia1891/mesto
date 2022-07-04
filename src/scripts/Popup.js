export default class Popup {
  constructor(popupSelector, { activeModifier, closeBtnSelector }) {
    this._popupSelector = popupSelector;
    this._activeModifier = activeModifier;
    this._closeBtnSelector = closeBtnSelector;
  }

  _handleEscapeClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  _handleCloseBtnClick = (event) => {
    this.close();
  };

  _handleCloseOverlayClick = (ev) => {
    if (ev.target === ev.currentTarget) {
      this.close();
    }
  };

  setEventListeners() {
    this._popup = document.querySelector(this._popupSelector);
    this._closeBtn = this._popup.querySelector(`.${this._closeBtnSelector}`);
    this._popup.addEventListener("mousedown", this._handleCloseOverlayClick);
    this._closeBtn.addEventListener("click", this._handleCloseBtnClick);
  }

  open() {
    document.addEventListener("keydown", this._handleEscapeClose);
    this._popup.classList.add(this._activeModifier);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscapeClose);
    this._popup.classList.remove(this._activeModifier);
  }
}
