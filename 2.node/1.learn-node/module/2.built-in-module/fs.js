import fs from "node:fs";

// console.log(fs);

fs.writeFile("demo.txt", "start to write", (err) => {
  err ? console.log(err) : console.log("Successful");
});

fs.appendFile("demo.txt", " append file", (err) => {
  err ? console.log(err) : console.log("Successful");
});

fs.readFile("demo.txt", "utf-8", (err, data) => {
  err ? console.log(err) : console.log(data);
});

// rename
// unlink (delete)