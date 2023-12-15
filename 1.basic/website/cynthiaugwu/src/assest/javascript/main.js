/* Smooth Scroll */
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

/* move mouse circle */
const moveMouseCircle = () => {
  window.addEventListener("mousemove", (evt) => {
    document.querySelector(
      ".move_circle"
    ).style.transform = `translate(${evt.pageX}px, ${evt.pageY}px)`;
  });
};
moveMouseCircle();

/* Homepage Animation */
const homepageAnimation = () => {
  var t1 = gsap.timeline();

  t1.from("header", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });

  t1.to(".animation_content", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2,
    delay: -1.5,
  });
};
homepageAnimation();

/* Single Service show img and rotate */
document.querySelectorAll(".single_service").forEach((elem) => {
  let rotate = 0;
  let diffRotate = 0;
  elem.addEventListener("mousemove", (e) => {
    diffRotate = e.clientX - rotate;
    rotate = e.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: e.clientY - elem.getBoundingClientRect().top,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffRotate * 0.5),
    });
  });

  elem.addEventListener("mouseleave", (e) => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power2,
      duration: 0.5,
    });
  });
});
