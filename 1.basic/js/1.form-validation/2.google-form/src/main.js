/* DOM for index.html*/
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");

let formInput = document.querySelector(".form_input");
let formLabel = document.querySelector(".form_label");
let msg = document.querySelector(".message");

document.querySelector(".nextBtn").addEventListener("click", submitNameForm);

// Create Submit Name form for index.html
function submitNameForm(e) {
  e.preventDefault();

  if (firstName.value === "") {
    firstName.focus();
    addClass(firstName, "error");
    message("Enter First name");

    return;
  } else if (lastName.value === "") {
    lastName.focus();
    addClass(lastName, "error");
    message("Enter last name");

    return;
  } else {
    removeClass(firstName, "error");
    removeClass(lastName, "error");
    message("");

    openURL(
      "http://127.0.0.1:5500/1.form-validation/2.google-form/src/signup-page-2.html"
    );
  }
}

// Add Class
const addClass = (targetClass, cssClass) => {
  targetClass.classList.add(cssClass);
};

// Add Class
const removeClass = (targetClass, cssClass) => {
  targetClass.classList.remove(cssClass);
};

// Message Function
const message = (msgText) => {
  msg.innerText = msgText;
};

// Open New URL Page
const openURL = (url) => {
  window.location.href = url;
};
