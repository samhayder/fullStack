/* DOM */
const carousel = document.querySelector(".slider_carousel");
const sliders = document.querySelectorAll(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let dots = document.querySelectorAll(".dot_container div");

let counter = 0;

const sliderNext = () => {
  sliders[counter].style.animation = "next1 0.5s ease-in forwards";

  if (counter >= sliders.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  sliders[counter].style.animation = "next1 0.5s ease-in forwards";

  dotIndicator();
};

const sliderPrev = () => {
  sliders[counter].style.animation = "prev1 0.5s ease-in forwards";

  if (counter == 0) {
    counter = sliders.length - 1;
  } else {
    counter--;
  }

  sliders[counter].style.animation = "prev2 0.5s ease-in forwards";

  dotIndicator();
};

next.addEventListener("click", sliderNext);
prev.addEventListener("click", sliderPrev);

/* Auto Slider */
const autoSlider = () => {
  const timer = () => {
    sliderPrev();
    dotIndicator();
  };
  deleteInterval = setInterval(timer, 1000);
};
// autoSlider();

const stopAutoSlider = () => {
  clearInterval(deleteInterval);
};
/* Stop Auto Slider */
carousel.addEventListener("mouseover", stopAutoSlider);
carousel.addEventListener("mouseout", autoSlider);

/* dot indicator */
const dotIndicator = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
};
