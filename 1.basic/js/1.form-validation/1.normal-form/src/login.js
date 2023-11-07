/* DOM */
const loginUserName = document.querySelector(".login_user_name");
const loginPassword = document.querySelector(".login_password");
let msg = document.querySelector(".massage");

document.querySelector(".login_form").addEventListener('submit', submitLoginForm);

function submitLoginForm (e) {
   e.preventDefault();

   if (loginUserName.value === '' || loginPassword.value === '') {
      msg.innerText = 'Please fill all field & Correct information'
   } else {
      openURL("http://127.0.0.1:5500/1.form-validation/src/profile.html");
   }

   console.log(e);
}

// Open URL
function openURL(url) {
   window.location.href = url;
}