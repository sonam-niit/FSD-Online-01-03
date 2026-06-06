const array = [1,2,3,4,5,6,7,8,9];

//for of
for(let val of array){
    console.log(val);
}

console.log("normal loop iterate");
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
//iterate characters in array
let name="SonamSoni";
for(let ch of name)
    console.log(ch);
    