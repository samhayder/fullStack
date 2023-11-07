/* Menu */
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const icon = document.querySelector(".fa-solid");

const hLinks = document.querySelectorAll("#hLink");

hamburger.addEventListener("click", (e) => {
  hamburgerMenu.classList.toggle("hidden");
  icon.classList.toggle("fa-xmark");

  if (e.target.className === "fa-solid fa-bars fa-xmark") {
    icon.classList.add("close_icon");
  } else {
    icon.classList.remove("close_icon");
  }
});

hLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    hamburgerMenu.classList.toggle("hidden");
    icon.classList.toggle("fa-xmark");
    if (e.target.className === "fa-solid fa-bars fa-xmark") {
      icon.classList.add("close_icon");
    } else {
      icon.classList.remove("close_icon");
    }
  });
});

/* Menu sticky */
window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add("bg-primary-light");
    header.classList.add("border-b");
    header.classList.add("border-gray");
  } else {
    header.classList.remove("bg-primary-light");
    header.classList.remove("border-b");
    header.classList.remove("border-gray");
  }
};

/* Testimonial */
const userThumbnails = document.querySelectorAll(".user_thumbnail");
const userReviews = document.querySelectorAll(".user_text");

const showActive = () => {
  for (thumbnail of userThumbnails) {
    thumbnail.classList.remove("user_thumb_active");
  }

  for (review of userReviews) {
    review.classList.remove("user_text_active");
  }

  let i = Array.from(userThumbnails).indexOf(event.target);

  userThumbnails[i].classList.add("user_thumb_active");

  userReviews[i].classList.add("user_text_active");
};

/* Pricing */
const toggleBtn = document.querySelector(".toggleBtn");

const cardFront1 = document.querySelector(".cardFront1");
const cardFront2 = document.querySelector(".cardFront2");
const cardFront3 = document.querySelector(".cardFront3");
const cardBack1 = document.querySelector(".cardBack1");
const cardBack2 = document.querySelector(".cardBack2");
const cardBack3 = document.querySelector(".cardBack3");

toggleBtn.addEventListener("change", () => {
  cardFront1.classList.toggle("-rotate-y-180");
  cardFront2.classList.toggle("-rotate-y-180");
  cardFront3.classList.toggle("-rotate-y-180");

  cardBack1.classList.toggle("rotate-y-180");
  cardBack2.classList.toggle("rotate-y-180");
  cardBack3.classList.toggle("rotate-y-180");
});
