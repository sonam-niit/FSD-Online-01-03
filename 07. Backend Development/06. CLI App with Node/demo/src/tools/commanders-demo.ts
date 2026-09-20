import { Command } from 'commander';
const program = new Command();

program
  .name('todo-cli')
  .description('Todo CLI app')
  .version('1.0.0');

program.command('add <task>')
  .description('Add a new Task')
  .action((task) => {
    console.log(`Added task: ${task}`);
  });

program.parse(process.argv);

//npx tsx src\tools\commanders-demo.ts add "Learn typescript"