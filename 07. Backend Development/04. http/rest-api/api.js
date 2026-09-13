const http = require("http");

let users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Mohit" },
    { id: 3, name: "Bhaskar" },
]
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    //Get Request
    if (req.url === "/users" && req.method === "GET") {
        res.end(JSON.stringify(users))
    }
    //Post Request
    else if (req.url === "/users" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            const user = JSON.parse(body);
            users.push(user);
            res.statusCode = 201;
            res.end(user); //send JSON response
        });
    }
    // Put Request
    else if (req.url.startsWith("/users/") && req.method === "PUT") {
        const id = Number(req.url.split("/")[2]);
        const index = users.findIndex(user => user.id === id);
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            const updateUser = JSON.parse(body);
            const index = users.findIndex(user => user.id === id);
            if (index === -1) {
                res.statusCode = 404;
                return res.end(JSON.stringify({
                    message: "User Not Found"
                }))
            }
            users[index] = { id: id, ...updateUser };
            res.end(JSON.stringify({
                message: "User Updated!",
                user: updateUser
            }))
        });

    }
    //Delete Request
    else if (req.url.startsWith("/users/") && req.method === "DELETE") {
        const id = Number(req.url.split("/")[2]);
        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message: "User Not Found"
            }))
        }
        const deletedUser = users.splice(index, 1);
        res.end(JSON.stringify({
            message: "User deleted!",
            user: deletedUser[0]
        }))
    }
})

server.listen(3000, () => console.log("Server Started on port 3000"))
// Check Get Method: localhost:3000/users
// Check POST method: localhost:3000/users
// pass data from JSON body
//{
//   "id": 4,
//   "name":"Sonam Soni"
// }

// check again get to verify its added or not

// Delete: localhost:3000/users/1
// pass different Ids and verify
