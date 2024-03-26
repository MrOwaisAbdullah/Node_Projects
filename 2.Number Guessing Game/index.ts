#! /usr/bin/env Node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.blue.bold("\n\t\tWelcome to My Number Guessing Game!\n"));

let randomNumber = Math.floor(Math.random()* 6 + 1);

let remainingChances = 3;

for (let i=0; i<3; i++) {
    let guessedNumber = await inquirer.prompt({
        type: "number",
        name: "userGuessedNumber",
        message: chalk.yellowBright("Guess a number between 1 and 6:")
    })
    remainingChances--;

    if (guessedNumber.userGuessedNumber === randomNumber) {
        console.log(chalk.green.bold("\t\t\nCongratulations, you guessed the right number!"));
        break;
    } 
    else if (remainingChances === 0) {
        console.log(chalk.redBright.bold("\t\t\nGame Over! You wasted your 3 chances!\n"));
        break;
    }

    else {
        console.log(chalk.grey("You guessed the wrong number!"));
        console.log(chalk.greenBright(`You have ${remainingChances} chance(s) left!\n`));
    }
    }
