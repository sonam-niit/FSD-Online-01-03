async function addNewData(){
    try {
        const resp = await 
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method: "POST",
            body: JSON.stringify({ 
                title: "Hello World", 
                body:"this is my first Post req",
                userId:1}),
            headers: {"Content-Type":"application/json"}
        });
        console.log(resp.status);
        console.log(resp.statusText);
        const json=await resp.json();
        console.log(json);
    } catch (error) {
        console.log(error); 
    }
}
addNewData()