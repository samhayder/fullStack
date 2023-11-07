const carousel = document.querySelector(".slider_wrapper");
const firstImg = carousel.querySelectorAll("img")[0];

const arrowIcons = document.querySelectorAll(".slider_btn p");

let firstImgWidth = firstImg.clientWidth + 14;
console.log(firstImgWidth);
let isScrolled = false,
  prevPageX,
  prevScrollLeft;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

function sliderStart(e) {
  isScrolled = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

function sliderOn(e) {
  e.preventDefault();
  if (!isScrolled) return;

  let currentDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - currentDiff;
}

function sliderStop() {
  isScrolled = false;
}

carousel.addEventListener("mousedown", sliderStart);
carousel.addEventListener("mousemove", sliderOn);
carousel.addEventListener("mouseup", sliderStop);
