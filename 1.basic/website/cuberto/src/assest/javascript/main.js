/* Mouse Flower */
Shery.mouseFollower();

/* Magnet Effect */
Shery.makeMagnet(".magnet");

/* Hover Video play */
Shery.hoverWithMediaCircle(".hover_video", {
  videos: [
    "../../../src/assest/videos/1.mp4",
    "../../../src/assest/videos/2.mp4",
    "../../../src/assest/videos/3.mp4",
  ],
});

/* Feature Section Scroll Trigger by gsap */
gsap.to(".single_feature", {
  // screen stop
  scrollTrigger: {
    trigger: ".feature_wrapper",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },

  y: "-300%",
  ease: Power1,
});

/* Feature section images effect */
const sections = document.querySelectorAll(".single_feature");

Shery.imageEffect(".images", {
  style: 1,
  slideStyle: (setScroll) => {
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: (prog) => {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});


