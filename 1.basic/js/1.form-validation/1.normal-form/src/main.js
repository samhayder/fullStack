/* DOM */
const fName = document.querySelector(".full_name");
const userName = document.querySelector(".user_name")
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const agree = document.querySelector(".agree_check")
const submit = document.querySelector('.submit')
let msg = document.querySelector(".massage");

const userLists = [];

document.querySelector('form').addEventListener('submit', submitForm);

function submitForm (e) {
   e.preventDefault();

   let user = {
     fullName: fName.value,
     userName: userName.value,
     email: email.value,
     password: password.value,
   };

   if (fName.value === '' || userName.value === '' || email === '' || password.value === '' || agree.checked === false) {
      msg.innerText = "Please fill the input box...";
      return setTimeout(() => {
         msg.innerText = ''
      }, 2500)
   } else {
      userLists.push(user)

      clearField();

      openURL("http://127.0.0.1:5500/1.form-validation/src/login.html");
   }


   console.log(userLists)
}

// Clear Field
function clearField () {
   [fName.value, userName.value, email.value, password.value, agree.checked] = ['', '', '', '', false];
}

// Open URL
function openURL (url) {
   window.location.href = url;
}