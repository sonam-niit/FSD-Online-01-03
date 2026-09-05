const fs = require("fs");

console.log("reading file")

fs.readFile("data.txt",(err,data)=>{
    if(err)
        console.log("error: ",err);
    else
        console.log("Data: ",data.toString());
})

console.log("reading file completed")