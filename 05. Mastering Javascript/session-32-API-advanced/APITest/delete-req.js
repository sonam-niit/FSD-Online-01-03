fetch("https://jsonplaceholder.typicode.com/todos/200", {
    method: "DELETE",
}).then(resp => {
    if (resp.status == 200)
        console.log("Data Deleted");
    else
        console.log("Data Not Deleted");

}).catch(err => console.log("Error while deleting Data", err))