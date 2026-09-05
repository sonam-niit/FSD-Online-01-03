fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "PUT",
    body: JSON.stringify({
        userId: 1,
        title: "check papers",
        completed: true
    }),
    headers: { "Content-Type": "application/json" }
})
    .then(resp => {
        console.log(resp.status);
        console.log(resp.statusText);
        return resp.json();
    })
    .then(json => console.log(json))
    .catch(err => console.log(err))
// Write Code for Delete Post