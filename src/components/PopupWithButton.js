import Popup from "./Popup.js";

export class PopupWithButton extends Popup {
  constructor(popupSelector, popupConfig, submitBtnSelector, submitCallBack) {
    super(popupSelector, popupConfig);
    this._submitCallBack = submitCallBack;
    this._submitBtnElement = this._popup.querySelector(submitBtnSelector);
  }

  _handleSubmit = () => {
    this._submitCallBack(this._item);
    this.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._submitBtnElement.addEventListener("click", this._handleSubmit);
  }

  open(item) {
    super.open();
    this._item = item;
  }
}
