const path= require("path");

const filepath = path.resolve("data.txt");
console.log(filepath);

console.log("Base Name: ",path.basename(filepath));
console.log("Dir Name: ",path.dirname(filepath));
console.log("Extension Name: ",path.extname(filepath));

// resolve
console.log("Absolute Path: ",path.resolve("sonam","file.txt"))
console.log("Cobines path: ",path.join("sonam","file.txt"))

console.log(path.parse("/users/sonam/data.txt"));

console.log(__dirname); // gives current directory where your code file is located
