import inquirer from "inquirer";

let bmi = await inquirer.prompt([
    {
        type: "number",
        name: "weight",
        message: "What is your weight in kg?"
    },
    {
        type: "number",
        name: "height",
        message: "What is your height in meter?"
    }
])

console.log("Your BMI is " + bmi.weight / (bmi.height * bmi.height)+ ".");