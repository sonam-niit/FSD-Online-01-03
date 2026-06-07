const arr=[1,2,3,4,5,6]

const removed= arr.splice(1,2); // 1 is starting , 2 is delete count
console.log("Element Removed",removed);
console.log("Array After Removal",arr); //1,4,5,6
//insert element at index 2, no delete, insert 20,30 after that
arr.splice(1,0,20,30)//1,20,30,4,5,6
console.log("Array After Insert",arr);

arr.splice(2,1,3); //at 2 index delete 1 and insert 3
console.log("Array After Replace",arr);