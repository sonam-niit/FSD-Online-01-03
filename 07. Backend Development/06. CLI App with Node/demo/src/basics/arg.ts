const args: string[] = process.argv.slice(2);

if(args.length==3){
    const [name,age,role]=args;
    console.log("\nParsed Values:");
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Role: ${role}`);  
}else{
    console.log("Pass 3 argments Name,Age and Role");
}

// npx tsx src/basics/arg.ts
// npx tsx src/basics/arg.ts sonam 45 Developer