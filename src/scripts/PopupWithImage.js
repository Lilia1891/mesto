import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  open() {
    document.addEventListener("keydown", this._handleEscapeClose);
    this._popup.classList.add(this._activeModifier);
  }
}
