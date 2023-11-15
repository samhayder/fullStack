// select Language
const languagesBtn = document.querySelector(".languagesBtn");
const languages = document.querySelectorAll(".select_language a");

languages.forEach((language) => {
  language.addEventListener("click", (e) => {
    let lastActiveLanguage = document.querySelector(
      ".select_language a.languageCheck"
    );

    if (e.target === languages[1]) {
      languagesBtn.innerText = "BN";
    } else {
      languagesBtn.innerText = "EN";
    }

    language.classList.add("languageCheck");

    lastActiveLanguage.classList.remove("languageCheck");
  });
});
