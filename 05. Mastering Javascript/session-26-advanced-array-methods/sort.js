//array.sort(pass compare function)

let names=["sonam","parth","lavesh","nankishor","sharda"];
names.sort(); //default behavior
console.log(names);

let numbers=[40,100,1,5,25,10]; 
numbers.sort() //String based sorting
console.log("With Default sort- string based",numbers);

//solution
numbers.sort((a,b)=>a-b) //use compare function
console.log("with compare function",numbers);
// objects array
let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]
users.sort()
users.sort((a,b)=>b.age - a.age);
console.log(users);

users.sort((a,b)=>a.name.localeCompare(b.name)); //sort in ascending
console.log(users);

