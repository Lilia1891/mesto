const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach(function (form) {
    setEventListeners(form, config);
  });
};

const setEventListeners = (form, config) => {
  const formInputs = Array.from(form.querySelectorAll(config.inputSelector));
  const submitBtn = form.querySelector(config.submitButtonSelector);
  toggleButtonState(formInputs, submitBtn, config);

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

  formInputs.forEach(function (input) {
    input.addEventListener("input", function (evt) {
      checkInputValidity(input, inputError, config);
      toggleButtonState(formInputs, submitBtn, config);
    });
    const inputError = form.querySelector(config.inputError + input.name);
  });
};

const showError = (input, errorMessage, inputError, config) => {
  input.classList.add(config.inputErrorClass);
  inputError.textContent = errorMessage;
  inputError.classList.add(config.errorClass);
};

const hideError = (input, inputError, config) => {
  input.classList.remove(config.inputErrorClass);
  inputError.textContent = "";
  inputError.classList.remove(config.errorClass);
};

const checkInputValidity = (input, inputError, config) => {
  if (!input.validity.valid) {
    showError(input, input.validationMessage, inputError, config);
  } else {
    hideError(input, inputError, config);
  }
};

const hasInvalidInput = (formInputs) => {
  return formInputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (formInputs, submitBtn, config) => {
  if (hasInvalidInput(formInputs)) {
    submitBtn.classList.add(config.inactiveButtonClass);
    submitBtn.setAttribute("disabled", true);
  } else {
    submitBtn.classList.remove(config.inactiveButtonClass);
    submitBtn.removeAttribute("disabled");
  }
};

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
  inputError: `.popup__input-error_`,
};

enableValidation(config);
