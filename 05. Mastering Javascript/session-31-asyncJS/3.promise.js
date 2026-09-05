function checkUserStatus(status) {
    const promise = new Promise(function (resolve, reject) {
        if (status) {
            resolve("Task Completed")
        } else {
            reject("Task Failed") //throwing error
        }
    })
    return promise;
}

abhishekPromise = checkUserStatus(true);
bhaskarPromise = checkUserStatus(false);

abhishekPromise
    .then(result=>console.log("Abhishek",result))
    .catch(err=> console.log(err)) //handling error
    .finally(()=>console.log('done'))
// then catch its called chaining
bhaskarPromise
    .then(result=>console.log("Bhaskar",result))
    .catch(err=> console.log(err))
    .finally(()=>console.log('done'))
