function squuare(num) {
    return num * num;
}

console.log(squuare(5));
console.log(squuare(5));

let multiplier = 2; //external variable
function square(num) {
    return num*num*multiplier;
}
console.log(square(5)); //50
multiplier=3;
console.log(square(5)); //75

//pure function: Input -> Processing -> output (same output with same input)
// No side effects
//calculate always has pure function

//impure function: Input ->(external state)  Processing -> output (same output with same input)
// if external value change side effects
// Restaurant Bill
// same item you purchase will get diffrent discount everytime
// paying bill be diffrent


