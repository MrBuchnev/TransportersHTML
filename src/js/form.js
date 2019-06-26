const submitButton = $('.form__button--submit');
const resetButton = $('.form__button--reset');
const emailField = $('.form__field--email');
const phoneField = $('.form__field--phone');
const passField = $('.form__field--pass');
const errorMessageElement = $('.form__message span');
const emailErrorMsg = 'An email must contain the @ symbol';
const phoneErrorMsg = 'A phone number can only contain digits';
const passErrorMsg = 'A password must contain at least 4 characters';

const validateForm = function () {
    const emailIncorrect = emailField.val().indexOf('@') == -1;
    const phoneIncorrect = phoneField.val().match(/^[0-9]+$/) == null;
    const passIncorrect = passField.val().length < 4;

    if (emailIncorrect) {
        errorMessageElement.text(emailErrorMsg);

        return false;
    } else if (phoneIncorrect) {
        errorMessageElement.text(phoneErrorMsg);

        return false;
    } else if (passIncorrect) {
        errorMessageElement.text(passErrorMsg);

        return false;
    }

    return;
}

const clearErrorMessage = function () {
    errorMessageElement.text('');
}

submitButton.on('click', validateForm);
resetButton.on('click', clearErrorMessage);
