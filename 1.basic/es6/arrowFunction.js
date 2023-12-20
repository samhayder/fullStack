// Arrow functions, also know as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions

setTimeout(() => {
  console.log("Hello");

  setTimeout(() => {
    console.log("Hey");

    setTimeout(() => {
      console.log("Joy Bangla");

      setTimeout(() => {
        console.log("Bangladesh Zindabadh");

        setTimeout(() => {
          console.log("Welcome");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
