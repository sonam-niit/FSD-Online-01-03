import { Command } from "commander";
import chalk from "chalk";
import fs from "fs";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const program = new Command();

const TODO_FILE = "todos.json";

// Read todos
function getTodos(): Todo[] {

    if (!fs.existsSync(TODO_FILE)) {
        return [];
    }
    const data = fs.readFileSync(TODO_FILE, "utf-8");

    return JSON.parse(data) as Todo[];
}

// Save todos
function saveTodos(todos: Todo[]): void {

    fs.writeFileSync(
        TODO_FILE,
        JSON.stringify(todos, null, 2)
    );
}

// CLI information
program
    .name("todo")
    .description("Simple CLI Todo Application")
    .version("1.0.0");

// ADD
program
    .command("add")
    .description("Add a new todo")
    .argument("<task>", "Todo task")
    .action((task: string) => {

        const todos = getTodos(); // get array from file

        const todo: Todo = {
            id: Date.now(),
            task: task,
            completed: false
        };

        todos.push(todo);

        saveTodos(todos); // save to file

        console.log(
            chalk.green(`✓ Todo added: ${task}`)
        );
    });

// LIST
program
    .command("list")
    .description("Display all todos")
    .action(() => {

        const todos = getTodos(); // get from files

        if (todos.length === 0) {
            console.log(
                chalk.yellow("No todos found.")
            );
            return;
        }

        console.log(
            chalk.blue("\nMy Todos:\n")
        );

        todos.forEach((todo, index) => {

            const status = todo.completed
                ? chalk.green("✓")
                : chalk.red("✗");

            console.log(
                `${index + 1}. ${status} ${todo.task}`
            );
        });

        console.log();
    });

// DELETE
program
    .command("delete")
    .description("Delete a todo")
    .argument("<id>", "Todo ID")
    .action((id: string) => {

        let todos = getTodos();

        const originalLength = todos.length;
        console.log(`id: ${id}`)
        todos = todos.filter(
            (todo,index) => index !== Number(id)-1
        );
        console.log(todos)
        if (todos.length === originalLength) {

            console.log(
                chalk.red("Todo not found.")
            );

            return;
        }

        saveTodos(todos);

        console.log(
            chalk.green("✓ Todo deleted")
        );
    });

// Start CLI
program.parse();

// npx tsx src\app\index.ts list
// npx tsx src\app\index.ts add "Learn typescript"
// npx tsx src\app\index.ts add "Learn commander"
// npx tsx src\app\index.ts add "Learn chalk"
// npx tsx src\app\index.ts list
// npx tsx src\app\index.ts delete 1
// everything is managed by files

// Practice Task
// create command complete
// which makes completed status true of your todo
// npx tsx src\app\index.ts complete 1
// above command will change status to true