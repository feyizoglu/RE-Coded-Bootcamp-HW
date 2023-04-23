const firstNameInput = document.querySelector("#fName");
const lastNameInput = document.querySelector("#lName");
const eMailInput = document.querySelector("#e-mail");
const passwordInput = document.querySelector("#password");
const button = document.querySelector(".claim");
let fNameWarn = document.querySelector("#warn-name");
let lastNameWarn = document.querySelector("#warn-lastName");
let eMailWarn = document.querySelector("#warn-email");
let passwordWarn = document.querySelector("#warn-password");

function validateForm() {
  nameValidation();
  lastNameValidation();
  eMailValidation();
  passwordValidation();
  if (
    fNameWarn.innerHTML == "" &&
    lastNameWarn.innerHTML == "" &&
    eMailWarn.innerHTML == "" &&
    passwordWarn.innerHTML == ""
  ) {
    alert("Welcome");
    firstNameInput.value = "";
    lastNameInput.value = "";
    eMailInput.value = "";
    passwordInput.value = "";
  }
}

button.addEventListener("click", validateForm);

function nameValidation() {
  let firstName = firstNameInput.value;
  if (firstName == "") {
    fNameWarn.innerHTML = "Say your name!";
  } else {
    fNameWarn.innerHTML = "";
  }
}
function lastNameValidation() {
  let lastName = lastNameInput.value;
  if (lastName == "") {
    lastNameWarn.innerHTML = "Say your lastname!";
  } else {
    lastNameWarn.innerHTML = "";
  }
}

function eMailValidation() {
  let eMail = eMailInput.value;
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!eMail.match(regEx)) {
    eMailWarn.innerHTML = "Enter a valid e-mail";
  } else {
    eMailWarn.innerHTML = "";
  }
}

function passwordValidation() {
  let password = passwordInput.value;
  const regEx =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
  if (!(password.match(regEx) || password.length > 7)) {
    passwordWarn.innerHTML =
      "Your password should have at least 8 character. Your password also includes lowercase, uppercase, number and special character";
  } else {
    passwordWarn.innerHTML = "";
  }
}
