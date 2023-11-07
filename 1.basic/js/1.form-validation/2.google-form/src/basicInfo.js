/* DOM for Basic Information */
const monthInput = document.querySelector(".month");
const dayInput = document.querySelector(".day");
const yearInput = document.querySelector(".year");
const genderInput = document.querySelector(".gender");

let birthdayMsg = document.querySelector(".birthday_message");
let genderMsg = document.querySelector(".gender_message");

document
  .querySelector(".basicInfoNextBtn")
  .addEventListener("click", submitBasicInfoForm);

// Create Submit Basic Information for signup-page-2.html
function submitBasicInfoForm(e) {
  e.preventDefault();

  if (monthInput.value === "") {
    monthInput.focus();
    addClass(monthInput, "error");

    return;
  } else if (dayInput.value === "") {
    dayInput.focus();
    addClass(dayInput, "error");
    birthdayMsg.innerText = "Please fill in a complete birthday";

    return;
  } else if (yearInput.value === "") {
    yearInput.focus();
    addClass(yearInput, "error");

    return;
  } else if (genderInput.value === "") {
    genderInput.focus();
    addClass(genderInput, "error");
    genderMsg.innerText = "Please select your gender";

    return;
  } else {
    removeClass(monthInput, "error");
    removeClass(dayInput, "error");
    removeClass(yearInput, "error");
    removeClass(genderInput, "error");
    birthdayMsg.innerText = "";
    genderMsg.innerText = "";

    openURL("");
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
