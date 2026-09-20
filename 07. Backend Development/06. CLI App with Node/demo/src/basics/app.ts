// console.log(process.argv);
// console.log(process.argv.slice(2));

const args: string[] = process.argv.slice(2);
if(args.length>0){
    console.log("Arguments Passed");
    args.forEach((arg,index)=>{
        console.log(`${index+1}. ${arg}`)
    })
}else{
    console.log("No arguments passed!");
    console.log("try running: npm start hello sonam 1234!");
}

// npx tsx src/basics/app.ts