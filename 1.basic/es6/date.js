const currentDate = new Date();
// Day Month Date Year Hour:Minute:Second

const fullYear = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDay();
const hours = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();
const milliseconds = new Date().getMilliseconds();

console.log(`current Date: ${currentDate}`);
console.log(`fullYear : ${fullYear}`);
console.log(`month : ${month}`);
console.log(`day : ${day}`);
console.log(`hours : ${hours}`);
console.log(`minute : ${minute}`);
console.log(`second : ${second}`);
console.log(`milliseconds : ${milliseconds}`);

// Convert Date to String
const convertString = new Date().toDateString();
console.log(convertString);
