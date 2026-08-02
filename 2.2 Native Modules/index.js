// const fs = require("fs");

// // fs.writeFile("abc.txt", "hello from node.js !!!! yeeeeeeeeeee", (err) => {
// //     if(err) throw err;
// //     console.log("file saved successfully ")
// // });

// // import { readFile } from 'node:fs';

// fs.readFile('./message.txt', "utf8",(err, data) => {
//   if (err) throw err;
//   else {
//   console.log(data);
//   console.log("work done successfully !")
//   }
// });


var abc = require("sillyname");
var ff = abc();

for(var i = 0 ; i<10; i++){
console.log(`my name is ${ff}.`);
}