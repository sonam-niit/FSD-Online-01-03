async function fetchData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        console.log(response.status);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log("Error Occured",error);
    }
}

fetchData();