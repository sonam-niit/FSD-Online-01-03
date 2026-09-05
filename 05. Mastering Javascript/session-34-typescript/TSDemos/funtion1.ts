// no return means void
function greet():void{
    console.log("Welcome to tyepScript!");
}
// typed parameters
function add(num1:number,num2:number):void{
    console.log("Addition: ",num1+num2);   
}
//typed parameters + boolean return type
function validAge(age:number):boolean{
    return age>=18;
}
greet()
add(23,67)
console.log(validAge(2))