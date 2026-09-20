import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ",(name:string)=>{
    rl.question("What is your age? ",(age:string)=>{
        console.log(`\nHello ${name}, you are ${age} years old`);
        rl.close();
    })
})

// npx tsx src/basics/readline-demo.ts