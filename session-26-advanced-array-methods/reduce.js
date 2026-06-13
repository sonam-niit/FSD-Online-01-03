const array= [1,2,3,4,5,6,7,8,9,10];
const sum=array.reduce((acc,current)=>acc+current,0);
// 0 is the initial value of acc
// for first iteration acc=0, current=1 => acc+curr => returns 1 to acc again
// for second iteration acc=1, curr =2 => return 3 to acc
// for 3rd iteration acc=3, curr=3 => returns 6 to acc
console.log(sum);

const cart = [
    {item:"Laptop",price:50000},
    {item:"Mouse",price:1000},
    {item:"Keyboard",price:2000}
]

const total= cart.reduce((sum,item)=>sum+item.price,0)
console.log("Total Amount: ",total);
