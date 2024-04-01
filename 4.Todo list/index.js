#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n\t\tWelcome to my todo list app!\n"));
let tasks = [];
function listTasks() {
    if (tasks.length === 0) {
        console.log(chalk.yellow("  Your task list is empty.\n"));
    }
    else {
        tasks.forEach((task, index) => {
            const status = task.completed ? chalk.green("[✔]") : chalk.red("[x]");
            console.log(`${index + 1}. ${status} ${task.description}`);
        });
    }
}
while (true) {
    console.log(chalk.yellow("What do you want to add in the todo list?"));
    let { description } = await inquirer.prompt({
        name: "description",
        type: "input",
        message: "Enter task description:",
    });
    tasks.push({ description, completed: false });
    console.log(chalk.green("  Task added successfully!\n"));
    let { addMore } = await inquirer.prompt({
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more tasks?",
    });
    if (!addMore) {
        break;
    }
}
while (true) {
    console.log("\n");
    let { action } = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "Choose an action:",
        choices: [
            "Add Tasks",
            "List Tasks",
            "Mark Task as Completed",
            "Remove Task",
            "Exit",
        ],
    });
    switch (action) {
        case "Add Tasks":
            console.log(chalk.yellow("What do you want to add in the todo list?"));
            let { description } = await inquirer.prompt({
                name: "description",
                type: "input",
                message: "Enter task description:",
            });
            tasks.push({ description, completed: false });
            console.log(chalk.green("  Task added successfully!\n"));
            break;
        case "List Tasks":
            listTasks();
            break;
        case "Mark Task as Completed":
            let tasksToMark = tasks.map((task, index) => ({
                name: `${index + 1}. ${task.description}`,
                value: index,
            }));
            let { taskMark } = await inquirer.prompt({
                name: "taskMark",
                type: "checkbox",
                message: "Select tasks to mark as completed:",
                choices: tasksToMark,
            });
            taskMark.forEach((i) => {
                tasks[i].completed = true;
            });
            console.log(chalk.green("  Tasks marked as completed!\n"));
            break;
        case "Remove Task":
            let tasksToRemove = tasks.map((task, index) => ({
                name: `${index + 1}. ${task.description}`,
                value: index,
            }));
            let { taskRemove } = await inquirer.prompt({
                name: "taskRemove",
                type: "list",
                message: "Select a task to remove:",
                choices: tasksToRemove,
            });
            tasks.splice(taskRemove, 1);
            console.log(chalk.green("  Task removed!\n"));
            break;
        case "Exit":
            console.log(chalk.blue.bold("\n\t\tThank you for using my todo list app!\n"));
            process.exit();
    }
}
