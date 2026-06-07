const read = require('readline-sync')
const todos = []; //create empty array

function addTodo(todo) {
    todos.push(todo);
    console.log(todo + " added");
}

function seeAllTodo() {
    if(todos.length==0)
        console.log("No todos added yet..");
        
    for (let todo of todos)
        console.log(todo);
}

function deleteTodo(name) {
    let index;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i] == name) {
            index = i; // index found
            break;
        }
    }
    todos.splice(index, 1); //delete the found index element
    console.log(`Element ${name} deleted successfully `);
}

while (true) {
    const op = read.question(`1. Add New Todo 2.See All Todos 3.Remove Todo 4.To exit.
        Enter Your input\n`);
    switch (Number(op)) {
        case 1:
            let task = read.question("Enter Task: ");
            addTodo(task); break;
        case 2:
            seeAllTodo(); break;
        case 3:
            let name = read.question("Enter Task to delete: ");
            deleteTodo(name);
            break;
        case 4:
            process.exit();
        default:
            log("Choose Correct option")
    }
}
console.log("Application Closed Successfully");
