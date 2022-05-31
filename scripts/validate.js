const forms = document.querySelectorAll(".popup__form");
forms.forEach(function (form) {
  const formInputs = form.querySelectorAll(".form__input");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

  formInputs.forEach(function (input) {
    input.addEventListener("input", function (evt) {
      checkInputValidity(input, inputError);
    });
    const inputError = form.querySelector(`.${input.id}-error`);
  });
});

const showError = (input, errorMessage, inputError) => {
  input.classList.add("popup__input_type_error");
  inputError.textContent = errorMessage;
  inputError.classList.add("popup__input-error_active");
};

const hideError = (input, inputError) => {
  input.classList.remove("popup__input_type_error");
  inputError.textContent = "";
  inputError.classList.remove("popup__input-error_active");
};

const checkInputValidity = (input, inputError) => {
  if (!input.validity.valid) {
    showError(input, input.validationMessage, inputError);
  } else {
    hideError(input, inputError);
  }
};
