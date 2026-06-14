const array = [1,2,3,4,5,6,7,8,9,10];

const found = array.find(item => item===7);
console.log(found ,"found")
// if multiple elements present then it returns first match
// if element not present then it returns undefined

const index = array.findIndex(item => item===7);
console.log("element found at ",index)
// if element not present then it returns -1

const arr=[1,2,3,4,5,2,3,2,6,7];
console.log("Count 2:",arr.filter(item=>item==2).length);
