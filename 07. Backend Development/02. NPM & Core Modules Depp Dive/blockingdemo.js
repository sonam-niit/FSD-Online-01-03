const fs= require("fs");

console.log("File reading started");

const data=fs.readFileSync("data.txt");
console.log(data.toString());

console.log("File reading completed");
