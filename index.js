import { readFile } from 'node:fs';

readFile('NewFile.txt',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 