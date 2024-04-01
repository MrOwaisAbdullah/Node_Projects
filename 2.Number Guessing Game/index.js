#! /usr/bin/env Node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.blue.bold("\n\t\tWelcome to My Number Guessing Game!\n"));
let randomNumber = Math.floor(Math.random() * 6 + 1);
let remainingChances = 3;
for (let i = 0; i < 3; i++) {
    let guessedNumber = await inquirer_1.default.prompt({
        type: "number",
        name: "userGuessedNumber",
        message: chalk_1.default.yellowBright("Guess a number between 1 and 6:")
    });
    remainingChances--;
    if (guessedNumber.userGuessedNumber === randomNumber) {
        console.log(chalk_1.default.green.bold("\t\t\nCongratulations, you guessed the right number!"));
        break;
    }
    else if (remainingChances === 0) {
        console.log(chalk_1.default.redBright.bold("\t\t\nGame Over! You wasted your 3 chances!\n"));
        break;
    }
    else {
        console.log(chalk_1.default.grey("You guessed the wrong number!"));
        console.log(chalk_1.default.greenBright(`You have ${remainingChances} chance(s) left!\n`));
    }
}
