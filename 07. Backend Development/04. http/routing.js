const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url; // get path url
    if (url == "/")
        res.end("Hello From Node Server!")
    else if (url == "/about")
        res.end("This is about page")
    else if (req.url == "/users")
        res.end("Users Page")
    else {
        res.statusCode = 404;
        res.end("Page Not Found")
    }
});

server.listen(5000, () => console.log("Server Started"));