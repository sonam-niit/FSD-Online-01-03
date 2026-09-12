import { Readable, Writable } from "stream";
const readable = new Readable({
    read() {
        this.push("Hello, ");
        this.push("My Name is Sonam Soni!");
        this.push(null);
    }
});

const writable = new Writable({
    write(chunk,encoding,callbak){
        console.log(`Received: ${chunk.toString()}`);
        callbak()
    }
})
readable.on("data",(chunk)=>{
    writable.write(chunk);
})
readable.on("end",()=>{
    writable.end()
})
// readable.pipe(writable);
writable.on("finish",()=>{
    console.log("stream processing completed");
    
})
//Error Handling
writable.on("error",(err)=>{
    console.log("Error Occured",err);
    
})