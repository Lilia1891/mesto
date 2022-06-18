class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config._inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputError = config.inputError;
    this._form = form;
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

  _hasInvalidInput(formInputs) {
    return formInputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState(formInputs, submitBtn) {
    if (this._hasInvalidInput(formInputs)) {
      submitBtn.classList.add(this._inactiveButtonClass);
      submitBtn.setAttribute("disabled", true);
      console.log(this._inactiveButtonClass);
    } else {
      submitBtn.classList.remove(this._inactiveButtonClass);
      submitBtn.removeAttribute("disabled");
    }
  }

  enableValidation() {
    const formInputs = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    const submitBtn = this._form.querySelector(this._submitButtonSelector);

    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(formInputs, submitBtn);
      });
    });
    this._toggleButtonState(formInputs, submitBtn);
  }

  cleanUpForm = () => {
    const formInputs = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    const submitBtn = this._form.querySelector(this._submitButtonSelector);

    formInputs.forEach((input) => {
      this._hideError(input);
    });
    this._toggleButtonState(formInputs, submitBtn);
  };
}
export default FormValidator;
