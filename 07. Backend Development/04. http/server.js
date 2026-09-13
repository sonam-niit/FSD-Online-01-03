const http = require('http');

// create server
const server = http.createServer((req, res) => {
  res.end("Hello From Node Server!")
});

//start server
server.listen(5000,()=>console.log("Server Started"));

// Run the code node server.js
// once server started go to broswer and check localhost:3000
// you can see response
// if you change code everytime stop and restart server
