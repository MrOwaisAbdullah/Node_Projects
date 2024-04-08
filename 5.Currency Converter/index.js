#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currencies = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 151.86,
    CAD: 1.36,
    AUD: 1.52,
    CNY: 7.23,
    PKR: 278.12,
    BDT: 109.83,
    INR: 83.32,
};
function getCurrencySymbol(currency) {
    switch (currency) {
        case "USD":
            return "$";
        case "EUR":
            return "€";
        case "GBP":
            return "£";
        case "JPY":
            return "¥";
        case "CAD":
            return "C$";
        case "AUD":
            return "A$";
        case "CNY":
            return "¥";
        case "PKR":
            return "₨";
        case "BDT":
            return "৳";
        case "INR":
            return "₹";
    }
}
console.log(chalk.blue.bold("\n\t\tWelcome to My CLI Currency Converter App\n"));
let answers = await inquirer.prompt([
    {
        name: "from",
        message: chalk.blue("\nSelect the currency to convert from:"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CNY", "PKR", "BDT", "INR"]
    },
    {
        name: "to",
        message: chalk.green("\nSelect the currency to convert to:"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CNY", "PKR", "BDT", "INR"]
    },
    {
        name: "amount",
        message: chalk.red("\nEnter the amount to convert:"),
        type: "number"
    }
]);
let fromAmount = currencies[answers.from];
let toAmount = currencies[answers.to];
let givenAmount = answers.amount;
let convertedAmount = (givenAmount / fromAmount) * toAmount;
let toCurrencySymbol = getCurrencySymbol(answers.to);
console.log(chalk.bold(`\nConverted Amount from ${answers.from} to ${answers.to} is `) + chalk.yellow.bold(`${toCurrencySymbol}${convertedAmount.toFixed(2)}\n`));
