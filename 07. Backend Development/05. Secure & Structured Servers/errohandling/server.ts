import http from "http";

const PORT = 3000;

const successResponse =  (data:any, message: string)=>{
    return {
        success: true,
        message,
        data
    }
}
const errorResponse =  (message:string , statusCode=500)=>{
    return {
        success: false,
        message,
        statusCode
    }
}

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    try {
        if(req.method === "GET" && req.url==="/api/hello"){
            res.statusCode = 200;
            // throw new Error("Test")  // just to check catch is working or not
            res.end(
                JSON.stringify(
                    successResponse(
                        {name:"Sonam"}, "API working successfully"
                    )
                )
            );
            return;
        }
        res.statusCode = 404;
        res.end(
            JSON.stringify(
                errorResponse("Route not found",404)
            )
        )
    } catch (error) {
        res.statusCode = 500;
        res.end(
            JSON.stringify(
                errorResponse("Internal Server Error",500)
            )
        )
    }
});

server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})