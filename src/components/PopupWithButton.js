import Popup from "./Popup.js";

export class PopupWithButton extends Popup {
  constructor(popupSelector, popupConfig, submitBtnSelector, submitCallBack) {
    super(popupSelector, popupConfig);
    this._submitCallBack = submitCallBack;
    this._popup = document.querySelector(popupSelector);
    this._submitBtnElement = this._popup.querySelector(submitBtnSelector);
  }

  _handleSubmit = () => {
    this._submitCallBack();
    this.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._submitBtnElement.addEventListener("click", this._handleSubmit);
  }
}
