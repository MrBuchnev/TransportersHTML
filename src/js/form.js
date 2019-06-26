const form = $('.form');
const submitButton = $('.form__button--submit');
const resetButton = $('.form__button--reset');
const emailField = $('.form__field--email');
const passField = $('.form__field--pass');
const errorMessageElement = $('.form__message span');
const emailErrorMsg = 'An email must contain the @ symbol';
const passErrorMsg = 'A password must contain at least 4 characters';
const modalElement = $('.modal');
const modalCloseButton = $('.modal__close');
const modalBackground = $('.modal__background');

const validateForm = function (event) {
    event.preventDefault();

    const emailIncorrect = emailField.val().indexOf('@') == -1;
    const passIncorrect = passField.val().length < 4;

    if (emailIncorrect) {
        errorMessageElement.text(emailErrorMsg);

        return false;
    } else if (passIncorrect) {
        errorMessageElement.text(passErrorMsg);

        return false;
    }

    showModal();
}

const clearErrorMessage = function () {
    errorMessageElement.text('');
}

const hideModal = function () {
    modalElement.removeClass('modal--visible');
}

const showModal = function () {
    modalElement.addClass('modal--visible');
}

form.on('submit', validateForm);
resetButton.on('click', clearErrorMessage);
modalCloseButton.on('click', hideModal);
modalBackground.on('click', hideModal);
