const fs = require("fs");

//Sync
// fs.writeFileSync("./test.txt", "Hey there Sync..!");

//Async
// fs.writeFile("./test.txt", "Hey there Async...!", (err)=> {})

//sync
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

//Async
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(result);
//     }
// })

//Sync
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString() )

// fs.cpSync("./test.txt", "./copy.txt")

// fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./test.txt").isFile());