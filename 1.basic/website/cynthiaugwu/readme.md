# Smooth Scroll

https://github.com/locomotivemtl/locomotive-scroll

## CSS

Add the base styles to your CSS file.

> locomotive-scroll.css

## Js

Add the cdn link

> https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js

````js
const scroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true,
});```

# Move Mouse Circle Fowler

## html & css

```html
<div class="move_circle absolute w-3 h-3 rounded-full bg-white bg-opacity-70 z-50 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>```

## js

```js
const moveMouseCircle = () => {
window.addEventListener("mousemove", (evt) => {
document.querySelector(
".move_circle"
).style.transform = `translate(${evt.pageX}px, ${evt.pageY}px)`;
});
};
moveMouseCircle();```

# Page Animation
Add gsap cdn for animation
> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>

## js
```js
const homepageAnimation = () => {
   var t1 = gsap.timeline();

   t1.from("header", {
      y: '-10',
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut
   })

   t1.to(".animation_content", {
     y: 0,
     ease: Expo.easeInOut,
     duration: 2,
     stagger: 2,
     delay: -1
   });
}
homepageAnimation();
````

# Move mouse to show img and rotate

```js
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
```

#### Credit

> https://cynthiaugwu.com/
