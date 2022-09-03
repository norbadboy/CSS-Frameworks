const loginContainer = document.querySelector(".login-main");
const form = document.querySelector("#formFeedback");
const emailForm = document.querySelector("#email");
const emailFormError = document.querySelector("#emailError");
const pwdForm = document.querySelector("#password");
const pwdFormError = document.querySelector("#pwdError");
const submit = document.querySelector("#submit");
var isValid1 = false;
var isValid2 = false;

function validationForm(validate) {
  validate.preventDefault();
  if (validateEmail(emailForm.value) === true) {
    emailFormError.style.display = "none";
    emailForm.style.borderBottom = "1px solid #e1dfda";
  } else {
    emailFormError.style.display = "flex";
    emailForm.style.borderBottom = "2px solid #DD493A";
    form = false;
  }
  if (checkLength(pwdForm.value, 8) === true) {
    pwdFormError.style.display = "none";
    pwdForm.style.borderBottom = "1px solid #e1dfda";
  } else {
    pwdFormError.style.display = "flex";
    pwdForm.style.borderBottom = "2px solid #DD493A";
    form = false;
  }
}
form.addEventListener("submit", validationForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function log_console() {
  if (validateEmail(emailForm.value) && checkLength(pwdForm.value, 8) === true) {
    window.location.href = "/profile.html";
  }
}
