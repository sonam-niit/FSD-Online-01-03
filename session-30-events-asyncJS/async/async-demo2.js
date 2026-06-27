let data=""
function dowloadFile(callback){
    console.log("Downloading....");
    setTimeout(()=>{
        console.log("Download Completed");
        data="ABCD";
        callback(); //now it will print loaded data
    },3000)
}

function readFile(){
    console.log("File Reading");
    console.log(data);
    
}

dowloadFile(readFile);