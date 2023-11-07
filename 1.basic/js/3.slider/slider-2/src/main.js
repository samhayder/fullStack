const carousel = document.querySelector(".carousel");
// const sliderImgs = document.querySelectorAll(".slider");
const firstImg = carousel.querySelectorAll(".slider")[0];

const arrowIcons = document.querySelectorAll(".slider_btn span");
const dots = document.querySelectorAll(".dots li");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

let firstImgWidth = firstImg.clientWidth + 14;

/* Show hide icon */
const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};

/* when click arrow icon to execute this */
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

    setTimeout(() => showHideIcons(), 60);
  });
});

/* when mouse down to execute sliderStart function */
const sliderStart = (e) => {
  // updating global variable
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

/* when mouse move & mouse click to execute sliderDragging function */
const sliderDragging = (e) => {
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;

  if (!isDragStart) return;
  carousel.scrollLeft = prevScrollLeft - positionDiff;

  carousel.classList.add("dragging");

  showHideIcons()
};

/* when mouse up to execute sliderStop function */
const sliderStop = (e) => {
  isDragStart = false;

  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", sliderStart);
carousel.addEventListener("mousemove", sliderDragging);
carousel.addEventListener("mouseup", sliderStop);
carousel.addEventListener("mouseleave", sliderStop);
