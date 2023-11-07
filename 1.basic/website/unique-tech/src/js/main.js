/* Responsive Mobile Menu */
const hamburger = document.querySelector(".hamburger_menu");
let menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");
const hLinks = document.querySelectorAll("#hLink");

hamburger.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("show_mobile_menu");

  menuIcon.classList.toggle("fa-close");
});
/* removing mobile menu overlay */
hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show_mobile_menu");
    menuIcon.classList.remove("fa-close");
  });
});

/* Sticky Nav bar */
/* const header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    header.classList.add("header_sticky");
  } else {
    header.classList.remove("header_sticky");
  }
}); */

/* Homepage Slider Carousel */
const sliders = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dots li");

/* when click dot to active slider */
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    /* slider img active */
    let lastImgActive = document.querySelector(
      ".homepage_carousel .slider.activeImg"
    );

    lastImgActive.classList.remove("activeImg");
    sliders[index].classList.add("activeImg");

    /* Dot li active */
    let lastActive = document.querySelector(".dots li.dotActive");
    lastActive.classList.remove("dotActive");
    dot.classList.add("dotActive");
  });
});

/* when mouse move to moving slider */
const homepageCarousel = document.querySelector(".homepage_carousel");

const draggingSlider = (e) => {
  homepageCarousel.scrollLeft = e.pageX;
  console.log(homepageCarousel);
};

homepageCarousel.addEventListener("mouseover", draggingSlider);
