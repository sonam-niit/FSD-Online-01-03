const array= [10,20,30,40,50,60];

console.log("slice with no end: ", array.slice(2)); // if no end
console.log("slice with end: ", array.slice(1,4)); // if no end
console.log("slice with negative index: ", array.slice(-2)); // if no end
console.log("slice: ", array.slice(0,-1)); // if no end

// get first 3 elements of array
// copy an array
// get last element of an array
//get last 3 elements

console.log("get first 3 elements:", array.slice(0,3));
const copy_array=array.slice()
console.log("copy of array:",copy_array);
console.log("last element:", array.slice(-1)[0]);
console.log("last 3 elements:", array.slice(-3));
