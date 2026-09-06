const fs= require("fs").promises;
const path= require("path");

const filepath = path.join(__dirname,"files","data.txt")

async function readData(filepath){
    try {
       const data=await fs.readFile(filepath);
       console.log(data.toString());
    } catch (error) {
        console.log(error); 
    }
}

readData(filepath);