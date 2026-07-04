async function getData(){
    try {
        const resp= await fetch("https://jsonplaceholder.typicode.com/todos/1");
        // by default it triggers GET method
        const json= await resp.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
}

getData();