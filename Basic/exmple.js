const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)

// blocking
// console.log("1");

// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

// console.log("2");
// console.log("3");

// Non-blocking
// console.log("1");

fs.readFile("contacts.txt", "utf-8", (err, result) => {
    // console.log(result);
});

// console.log("2");
// console.log("3");