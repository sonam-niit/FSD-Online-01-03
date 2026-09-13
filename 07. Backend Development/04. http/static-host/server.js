const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath;
    if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html")
    } else {
        filePath = path.join(__dirname, "public", req.url)
    }
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.statusCode=404;
            res.end("File Not found");
            return;
        }
        res.end(data);
    })
});

server.listen(5000, () => console.log("Server Started"));