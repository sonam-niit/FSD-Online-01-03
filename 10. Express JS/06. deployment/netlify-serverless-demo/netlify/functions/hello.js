exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "Hello From Netlify",
            name: "Node Js ServerLess Function",
            method: event.httpMethod
        })
    }
}
// handler is the starting Point of Server less function
// event which contains request information
// context: contains execution method
// statusCode: HTTp response status
// body: response which we want to provide to client