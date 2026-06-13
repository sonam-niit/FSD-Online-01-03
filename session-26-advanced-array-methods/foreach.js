const array = [1,2,3,4,5,6,7];

array.forEach(a => console.log(a)) // iteration

let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]
// iterate all users using foreach
users.forEach(user => {
    console.log("----------------------------")
    console.log("Name: ",user.name);
    console.log("Age: ",user.age);
})