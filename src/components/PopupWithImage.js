import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupConfig) {
    super(popupSelector, popupConfig);
    this._popupViewImage = this._popup.querySelector(".popup__image");
    this._popupViewTitle = this._popup.querySelector(".popup__image-title");
  }
  open(name, link) {
    super.open();
    this._popupViewImage.src = link;
    this._popupViewImage.alt = name;
    this._popupViewTitle.textContent = name;
  }
}
