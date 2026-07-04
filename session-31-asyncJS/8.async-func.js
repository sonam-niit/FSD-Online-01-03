async function greeting(){
    return "Good Morning..!"
}

const result = greeting(); // async function always result is promise Object

result.then(data=>console.log(data))
