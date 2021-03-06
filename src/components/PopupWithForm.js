import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(
    popupSelector,
    formName,
    popupConfig,
    { inputSelector, submitBtnSelector, formSelector, activeCaption },
    submitCallBack,
    cleanupFormCallBack,
    getterCallBack = null
  ) {
    super(popupSelector, popupConfig);
    this._submitCallBack = submitCallBack;
    this._formName = formName;
    this._inputSelector = inputSelector;
    this._submitBtnSelector = submitBtnSelector;
    this._activeCaption = activeCaption;
    this._getterCallBack = getterCallBack;
    this._formSelector = formSelector;
    this._formElement = this._popup.querySelector(
      "form[name=" + this._formName + "]"
    );
    this._inputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitBtnSelector
    );
    this._normalCaption = this._submitButton.textContent;
    this._cleanupFormCallBack = cleanupFormCallBack;
  }

  _getInputValues() {
    const values = {};

    this._inputs.forEach((inputElement) => {
      values[inputElement.name] = inputElement.value;
    });

    return values;
  }

  _setInputValues(values) {
    this._inputs.forEach((inputElement) => {
      inputElement.value = values[inputElement.name];
    });
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._submitCallBack(
      this._getInputValues(),
      () => this.close(),
      (isSaving) => this.toggleButtonCapture(isSaving)
    );
  };

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._handleSubmit);
  }

  open() {
    if (this._getterCallBack) {
      this._setInputValues(this._getterCallBack());
    } else {
      this._formElement.reset();
    }
    this._cleanupFormCallBack();
    super.open();
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  toggleButtonCapture(isSaving) {
    this._submitButton.textContent = isSaving
      ? this._activeCaption
      : this._normalCaption;
  }
}
