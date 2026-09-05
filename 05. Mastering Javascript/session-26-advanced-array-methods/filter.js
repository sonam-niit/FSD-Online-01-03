const array= [1,2,3,4,5,6,7];
const even = array.filter(a => a %2 ===0);
console.log(even);

const ages= [11,23,31,41,15,36,17];
const adults = ages.filter(num => num>=18);
console.log(adults);

let users = [
    {name: "John",age:55},
    {name: "Alice",age:36},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]

// filter only those users whose age is >35
const filterAge = users.filter(user => user.age > 35);
console.log(filterAge);
