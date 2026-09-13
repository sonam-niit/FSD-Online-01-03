const http = require('http');

const server = http.createServer((req, res) => {
    //Get Method
    if (req.url === "/users" && req.method === "GET") {
        res.end("GET: Display users")
    }
    //POST method
    else if (req.url === "/users" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            console.log("Received Data: ", body);
            // res.writeHead(201, { 'Content-Type': 'application/json' });
            res.statusCode=201;
            res.setHeader('Content-Type','application/json')
            res.end(body); //send JSON response
        });
    }
    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(5000, () => console.log("Server Started"));
// run code
// open thunder client - new Request
// check localhost:5000/users
// with GET & POST methods
// check responses