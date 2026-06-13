// returns new array from existing array based on the applied logic

const array = [1,2,3,4,5,6,7];
// creating new array by multiplying all numbers with 3
const newArray = array.map((value)=>value * 3);

console.log(newArray);


let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]
// creating names array from existing array
let names = users.map(user => user.name);
console.log(names);

