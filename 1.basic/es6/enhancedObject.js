//Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

const user = (name, age, work) => {
   return {
      name,
      age,
      work,
      info: () => {
         console.log(`My name is ${name}. I'm  ${age} years old. I'm a ${work}`);
      }
   }
}

const samUser = user("samhayder", 32, 'web developer');
const hayderUser = user("yasin", 17, 'seo expert');

console.log(samUser.info());
console.log(hayderUser.info());

const calculate = {
   sum: (x,y) => x + y,
   multi: (x,y) => x * y
}

console.log(calculate.sum(2,3));
console.log(calculate.multi(2,3));