class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputError = config.inputError;
    this._form = form;
    this._formInputs = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
  }

  _showError = (input, errorMessage) => {
    input.classList.add(this._inputErrorClass);
    const inputError = this._form.querySelector(this._inputError + input.name);
    inputError.textContent = errorMessage;
    inputError.classList.add(this._errorClass);
  };

  _hideError = (input) => {
    input.classList.remove(this._inputErrorClass);
    const inputError = this._form.querySelector(this._inputError + input.name);
    inputError.textContent = "";
    inputError.classList.remove(this._errorClass);
  };

  _checkInputValidity = (input) => {
    const errorMessage = input.validationMessage;
    if (!input.validity.valid) {
      this._showError(input, errorMessage);
    } else {
      this._hideError(input);
    }
  };

  _hasInvalidInput() {
    return this._formInputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState(submitBtn) {
    if (this._hasInvalidInput(this._formInputs)) {
      submitBtn.classList.add(this._inactiveButtonClass);
      submitBtn.setAttribute("disabled", true);
    } else {
      submitBtn.classList.remove(this._inactiveButtonClass);
      submitBtn.removeAttribute("disabled");
    }
  }

  enableValidation() {
    const submitBtn = this._form.querySelector(this._submitButtonSelector);
    this._formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(submitBtn);
      });
    });
    this._toggleButtonState(submitBtn);
  }

  cleanUpForm = () => {
    const submitBtn = this._form.querySelector(this._submitButtonSelector);

    this._formInputs.forEach((input) => {
      this._hideError(input);
    });
    this._toggleButtonState(submitBtn);
  };
}
export default FormValidator;
