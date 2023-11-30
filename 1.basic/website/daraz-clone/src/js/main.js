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

/* Homepage Slider */
const sliderCarousel = document.querySelector(".slider_carousel");
const sliders = document.querySelectorAll(".slider");
const sliderNavigation = document.querySelectorAll(".slider_navigation span");
const dots = document.querySelectorAll(".dots ul li");

const firstImg = document.querySelectorAll(".slider_carousel .slider")[0];
const firstImgWidth = firstImg.clientWidth;

let counter = 0;

/* Slider Forward */
const sliderForward = () => {
  if (counter === 0) {
    return;
  } else {
    counter--;
  }

  sliderCarousel.scrollLeft += -firstImgWidth;

  dotIndicator();
};

/* Slider Backward */
const sliderBackward = () => {
  if (counter >= sliders.length - 1) {
    return;
  } else {
    counter++;
  }

  sliderCarousel.scrollLeft += firstImgWidth;

  dotIndicator();
};

/* Slider Button Navigation */
sliderNavigation.forEach((button) => {
  button.addEventListener("click", () => {
    button.id == "forward" ? sliderForward() : sliderBackward();
  });
});

/* Slider Dot Indicator */
const dotIndicator = () => {
  dots.forEach((dot) => {
    dot.className = dot.className.replace(" dotActive", "");
  });

  dots[counter].className += " dotActive";
};

/* Slider Dot Active Image */
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    let lastActive = document.querySelector(".dots ul li.dot.dotActive");

    dot.classList.add("dotActive");
    lastActive.classList.remove("dotActive");

    sliderCarousel.scrollLeft = firstImgWidth * index;

    counter = index; //Counter Updating
  });
});

/* Countdown */
let countDownEndTime = new Date("29 December 2023 10:51: PM");

const countDown = setInterval(() => {
  let currentTime = new Date();
  let distance = (countDownEndTime - currentTime) / 1000;

  /* Calculate Time */
  let days = Math.floor(distance / 3600 / 24); // seconds / hours

  let hours = Math.floor((distance / 3600) % 24); // seconds % hours

  let minutes = Math.floor((distance / 60) % 60); // minutes % minutes

  let seconds = Math.floor(distance % 60); // minutes

  /* DOM */
  document.querySelector(".hours").innerText = hours;
  document.querySelector(".minutes").innerText = minutes;
  document.querySelector(".seconds").innerText = seconds;

  /* clear setInterval */
  if (distance < 0) {
    clearInterval(countDown);
    document.querySelector(".hours").innerText = '00';
    document.querySelector(".minutes").innerText = '00';
    document.querySelector(".seconds").innerText = '00';
  }
}, 1000);
