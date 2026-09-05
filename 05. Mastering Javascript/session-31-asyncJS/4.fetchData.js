const response = fetch('https://jsonplaceholder.typicode.com/posts/2');

response
    .then(result=>result.json())
    .then(json=>console.log(json))
    .catch(err=>console.log('Error Occured',err))
    .finally(()=>console.log("Task Completed Successfully"))
