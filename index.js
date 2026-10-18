const fs = require("fs");
fs.writeFile("newfile.txt", "hello from nodejs", (err) => {
  if(err) throw err;
  console.log("file saved")
})