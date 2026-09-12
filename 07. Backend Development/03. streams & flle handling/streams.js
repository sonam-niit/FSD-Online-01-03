const fs = require("fs");

const redableStream = fs.createReadStream("input.txt",{
    encoding: "utf8"
});
fs.c
redableStream.on("data",(chunk)=>{
    console.log("Received Chunk",chunk);
})

redableStream.on("end",()=>{
    console.log("Finished Reading");
})