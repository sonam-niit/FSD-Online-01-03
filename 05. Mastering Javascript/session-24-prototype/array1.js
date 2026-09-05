const numbers=[]; //blank array

numbers[0]=10;
numbers[1]=20;
numbers[2]=30;

console.log(numbers);

console.log("Access Element at index 1:", numbers[1]);

console.log("Before update: ", numbers[2]);

numbers[2]=50 ; // value updated 
console.log("After update: ", numbers[2]);

numbers[5]=90; //adding new (2 blank spaces added)
console.log("after adding new:" ,numbers);
delete numbers[2]; // remove value index remains there
console.log(numbers);