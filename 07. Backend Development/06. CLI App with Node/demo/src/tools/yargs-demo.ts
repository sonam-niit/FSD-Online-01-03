import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
    .command('add <task>', 'Add a new Task', (yargs) => {
        return yargs.option('d', { alias: 'description', type: 'string' })
    }, (argv) => {
        console.log(`Added: ${argv.task}`);
        console.log(`Description: ${argv.description || 'No Description'}`);
    })
    .command('list','List All Task',()=>{
        console.log("Listing all task...");
    })
    .demandCommand(1)
    .help()
    .argv;

// npm i -D yargs @types/yargs
// npx tsx src\tools\yargs-demo.ts 
// npx tsx src\tools\yargs-demo.ts add "Learn typescript"
// npx tsx src\tools\yargs-demo.ts add "Learn typescript" -d "understand CLI"
// npx tsx src\tools\yargs-demo.ts list
// npx tsx src\tools\yargs-demo.ts --help