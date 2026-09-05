const numbers = [];

numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);

console.log("After Push: ",numbers);
numbers.unshift(50); //50,10,20,30,40
numbers.unshift(60); //60,50,10,20,30,40
console.log("After unshift: ",numbers);

console.log("Removed using pop",numbers.pop()); //40
console.log("Removed using shift ",numbers.shift()); //60


