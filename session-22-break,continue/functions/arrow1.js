const add = (a, b) => a + b; //return addition of a+b
// single statement without curly bracket no need to write return keyword
const greet = name => console.log("Hello " + name);
// in single para () also not needed
const calculate = (a, b) => {
    let add = a + b;
    let mul = a * b;
    return add + mul;
}
// more that one line of code requires {}
//in that case if you wnat to return return key word you have to write explicilty

console.log(add(3, 4));
greet("Sonam Soni");
console.log(calculate(3, 4));