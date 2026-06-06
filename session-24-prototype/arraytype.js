//homogeneous
const arr1= [1,2,3,4,5]; //numbers array
const arr2= ["a","b","c"]; //strings array
const arr3= [true,false,false,true]; //booleans array
const arr4= [
    {id:1,name:"sonam",age:"45"},
    {id:2,name:"alex",age:"12"},
    {id:3,name:"bob",age:"20"},
    {id:4,name:"catty",age:"21"},
]; //objects array

console.log(typeof arr1); //object (for all type)
console.log(Array.isArray(arr2)); //verify variable is object or not

//heterogeneous
const arr=[10,"sonam",true, 23.45, {id:2,name:"Bob"}]
console.log(arr);