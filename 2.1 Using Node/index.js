const fs = require("fs");

fs.readFile("/home/deepanshu6s/webdnew/2.2 Native Modules/NewFile.txt", "utf-8", (err,data)=>{
if(err) throw err;
console.log(data);
})