// importing function

const { add, sub, mul, div } = require("./calculator");

let num1=10, num2=20, op="-";
switch(op){
    case "+": console.log("Addition: ",add(num1,num2)); break;
    case "-": console.log("Subtraction: ",sub(num1,num2)); break;
    case "*": console.log("Multiplication: ",mul(num1,num2)); break;
    case "/": console.log("Division: ",div(num1,num2)); break;
    default: console.log("Choose correct operator!");
}