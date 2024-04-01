#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.green.bold("\t\t\tWelcome to My Simple Calculator!\n"));
let continueCalculating = true;
while (continueCalculating) {
    let calculator = await inquirer_1.default.prompt([
        {
            type: "number",
            name: "num1",
            message: chalk_1.default.red("Enter First number:")
        },
        {
            type: "number",
            name: "num2",
            message: chalk_1.default.blue("Enter Second number:")
        },
        {
            type: "list",
            name: "operation",
            message: chalk_1.default.magenta.bold("Select operation:"),
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
    console.log(chalk_1.default.yellowBright.bold(`\nThe result is: ${result}\n`));
    const { continueCalculation } = await inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "continueCalculation",
            message: "\nDo you want to perform another calculation?",
            default: true
        }
    ]);
    continueCalculating = continueCalculation;
    if (!continueCalculating) {
        console.log(chalk_1.default.green("\n\tThanks for using My Simple Calculator!"));
    }
}
