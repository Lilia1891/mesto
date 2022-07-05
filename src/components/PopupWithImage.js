import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  open(name, link) {
    super.open();
    this._popup = document.querySelector(this._popupSelector);
    const popupViewImage = this._popup.querySelector(".popup__image");
    const popupViewTitle = this._popup.querySelector(".popup__image-title");
    popupViewImage.src = link;
    popupViewImage.alt = name;
    popupViewTitle.textContent = name;
  }
}
