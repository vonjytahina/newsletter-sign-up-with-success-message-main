const app = document.querySelector(".app");
const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const emailValue = document.querySelector(".email-value");
const dismissMessage = document.querySelector(".dismiss-message");

form.onsubmit = (e) => {
  e.preventDefault();
  var regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var testEmail = regexEmail.test(inputEmail.value);
  if (testEmail == false) {
    inputEmail.style.background = "#ffe8e6"
    inputEmail.style.color = "#ff6257"
    inputEmail.style.border = "1px solid #ff6257";
    errorMessage.style.display = "block"
  } else {
    emailValue.innerHTML = inputEmail.value
    inputEmail.style.background = "#fff"
    inputEmail.style.color = "#242742"
    inputEmail.style.border = "1px solid #9294a0";
    errorMessage.style.display = "none"
    successMessage.style.display = "block"
    app.style.display = "none"
  }
};

dismissMessage.onclick = () => {
  inputEmail.value = ""
  successMessage.style.display = "none"
  app.style.display = "grid"
}
