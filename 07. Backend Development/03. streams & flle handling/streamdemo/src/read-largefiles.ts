import fs from "fs";
import readline from "readline";
const fileStream = fs.createReadStream("../large-file.txt",{
    encoding: "utf-8"
})

const r1= readline.createInterface({
    input: fileStream,
    ctrlDelay: Infinity
})
let lineNumber = 0;
r1.on("line",(line)=>{
    lineNumber++;
    console.log("Line",line);  
})
r1.on("close",()=>{
    console.log("Completed");
    
})

// async function processFile() {
//     let lineNumber = 0;
//     for await (const line of r1){
//         lineNumber++;
//         console.log(`Line: ${lineNumber}: ${line}`);
//     }
//     console.log(`Finished. Total lines: ${lineNumber}`);
// }

// processFile();