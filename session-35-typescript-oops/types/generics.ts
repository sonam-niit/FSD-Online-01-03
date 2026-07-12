function print<T>(value:T){
    return value;
}

// How to Call??
console.log(print<number>(4)); // console.log(print(4))
console.log(print<string>("Sonam")); //console.log(print("Sonam"))
console.log(print<boolean>(true));

function printArray<T>(arr:T[]):void{
    arr.forEach(item=>console.log(item))
}

printArray<number>([10,20,20]);
printArray<string>(["Java","React","Node"]);