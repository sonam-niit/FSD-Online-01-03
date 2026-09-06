const fs = require("fs").promises;

async function readData(){
    try {
       const data=await fs.readFile("data.txt");
       console.log(data.toString());
       
    } catch (error) {
        console.log(error);
        
    }
}
// readData()
// fs.readFile() uses a callback but we can convert that into promise
// and then use async await
