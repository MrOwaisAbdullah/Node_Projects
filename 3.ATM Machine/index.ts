#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

interface Transaction {
    type: string;
    amount: number;
    date: string;
}

let savedPin: any = "1234";
let accountBal: any = 10000;
let transactionHistory: Transaction[] = [];

console.log(chalk.green.bold("\t\tWelcome to My CLI ATM Machine!\n"));

    while (true) {
        let startApp = await inquirer.prompt({
            name: "start",
            type: "list",
            message: "Choose an option:",
            choices: ["Go to Main Menu", "Exit"]
        });

        if (startApp.start === "Exit") {
            console.log(chalk.blue("\n\t\tThank you for using My CLI ATM Machine!\n"));
            break;
        }

        let userPin = await inquirer.prompt({
            name: "pin",
            type: "password",
            message: "Enter Your Pin:",
            mask: "*"
        });

        if (userPin.pin != savedPin) {
            console.log(chalk.red("\n\tInvalid PIN. Exiting...\n"));
            break;
        }

        let exitLoop = false;

        while (!exitLoop) {
            let options = await inquirer.prompt({
                name: "option",
                type: "list",
                message: "Select an Option:",
                choices: [
                    "Balance Inquiry",
                    "Deposit",
                    "Withdrawal",
                    "Transaction History",
                ]
            });

            switch (options.option) {
                case "Balance Inquiry":
                    console.log(chalk.blue("\nYour current balance: $"), chalk.green(accountBal),"\n");
                    break;

                case "Deposit":
                    let depositAmount = await inquirer.prompt({
                        name: "depamount",
                        type: "number",
                        message: "Enter the amount to deposit:"
                    });
                    accountBal += depositAmount.depamount;
                    transactionHistory.push({ type: "Deposit", amount: depositAmount.depamount, date: new Date().toLocaleString() });
                    console.log(chalk.green("\n\tDeposit successful!\n"));
                    break;

                case "Withdrawal":
                    let withDrawalAmount = await inquirer.prompt({
                        name: "wdAmount",
                        type: "number",
                        message: "Enter the amount to withdraw:"
                    });

                    if (withDrawalAmount.wdAmount > 0 && withDrawalAmount.wdAmount <= accountBal) {
                        accountBal -= withDrawalAmount.wdAmount;
                        transactionHistory.push({ type: "Withdrawal", amount: withDrawalAmount.wdAmount, date: new Date().toLocaleString() });
                        console.log(chalk.green("\n\tWithdrawal successful!\n"));
                    } else {
                        console.log(chalk.red("\nInvalid withdrawal amount or insufficient balance.\n"));
                    }
                    break;

                case "Transaction History":
                    console.log(chalk.yellow("\nTransaction History:\n"));
                    transactionHistory.forEach(transaction => {
                        console.log(chalk.blue(`${transaction.date}: ${transaction.type} $${transaction.amount}`));
                    });
                    break;
                }

        let returnToMainMenu = await inquirer.prompt({
            name: "returnToMainMenu",
            type: "confirm",
            message: "Return to the main menu?",
            default: false
        });

        exitLoop = !returnToMainMenu.returnToMainMenu;
    }
}
