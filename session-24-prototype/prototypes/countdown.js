const countDown=(n)=>{
    if(n===0)
        return
    console.log(n);
    countDown(n-1); //recursion
}

countDown(5);

function factorial(n){
    if(n==1)
        return 1;
    return n * factorial(n-1);
}

console.log("factorial of 5",factorial(5))