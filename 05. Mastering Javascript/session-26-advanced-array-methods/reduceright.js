const name= "Hello";
const array = name.split("");

// "H","e","l","l","o"
const reverse = array.reduceRight((acc,cur)=>acc+cur , "");
// acc = "", cur = "o" = "o"
// acc = "o", cur = "l" = "ol"
// acc = "ol", cur = "l" = "oll"
// acc = "oll", cur = "e" = "olle"
// acc = "olle", cur = "H" = "olleH"

console.log(reverse);

const nums=[10,5,2];
const res1 = nums.reduce((acc,cur)=>acc-cur);
console.log(res1); // 3

const res2 = nums.reduceRight((acc,cur)=>acc-cur);
console.log(res2); // -13
