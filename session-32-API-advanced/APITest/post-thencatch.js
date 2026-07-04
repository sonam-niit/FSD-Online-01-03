fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({ title: "Hello World", body: "this is my first Post req", userId: 1 }),
    headers: { "Content-Type": "application/json" }
})
.then(resp=>{
    console.log(resp.status);
    console.log(resp.statusText);
    return resp.json();
})
.then(json=> console.log(json))
.catch(err=>console.log(err))
