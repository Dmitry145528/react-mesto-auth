export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._submitButtonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
  }

  // Метод для отображения сообщения об ошибке в поле ввода
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  // Метод для скрытия сообщения об ошибке в поле ввода
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
  }

  // Метод для проверки валидности поля ввода
  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  // Метод для включения кнопки
  _enableButton() {
    this._submitButtonElement.disabled = false;
    this._submitButtonElement.classList.remove(this._config.inactiveButtonClass);
  }

  // Метод для отключения кнопки
  _disableButton() {
    this._submitButtonElement.disabled = true;
    this._submitButtonElement.classList.add(this._config.inactiveButtonClass);
  }

  // Метод для изменения состояния кнопки в зависимости от валидности формы
  _toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  // Метод установки обработчиков событий на форму
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Метод включения валидации формы
  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }

  resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButtonState();
  }
}