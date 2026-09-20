const args: string[] = process.argv.slice(2);

console.log("=== CLI fundamentals process object");
console.log("Node version: ",process.version);
console.log("Platform: ",process.platform);
console.log("Current Directory: ",process.cwd());
console.log("arguments: ",args);
console.log("arguments count: ",args.length);

if(args.length>0){
    console.log("First Argument:",args[0]);
}else{
    console.log("No arguments passed!");
}
//  npx tsx src/basics/process-demo.ts hello world 123
//  npx tsx src/basics/process-demo.ts
