#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("Welcome to My Simple Calculator!\n"));
let continueCalculating = true;
while (continueCalculating) {
    let calculator = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: chalk.red("Enter First number:")
        },
        {
            type: "number",
            name: "num2",
            message: chalk.blue("Enter Second number:")
        },
        {
            type: "list",
            name: "operation",
            message: chalk.magenta.bold("Select operation:"),
            choices: ["+", "-", "*", "/", "**", "%"]
        }
    ]);
    let result;
    switch (calculator.operation) {
        case "+":
            result = calculator.num1 + calculator.num2;
            break;
        case "-":
            result = calculator.num1 - calculator.num2;
            break;
        case "*":
            result = calculator.num1 * calculator.num2;
            break;
        case "/":
            result = calculator.num1 / calculator.num2;
            break;
        case "**":
            result = calculator.num1 ** calculator.num2;
            break;
        case "%":
            result = calculator.num1 % calculator.num2;
            break;
    }
    console.log(chalk.yellowBright.bold(`\nThe result is: ${result}\n`));
    const { continueCalculation } = await inquirer.prompt([
        {
            type: "confirm",
            name: "continueCalculation",
            message: "\nDo you want to perform another calculation?",
            default: true
        }
    ]);
    continueCalculating = continueCalculation;
    if (!continueCalculating) {
        console.log(chalk.green("\nThanks for using My Simple Calculator!"));
    }
}
