#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// This is a simple word counter project.
console.log(chalk.bold.magentaBright("\n ----------------------------- Word Counter --------------------------------"));
console.log(chalk.bold.magentaBright("\n \t\t Welcome to the word counter project.\n"));
console.log(chalk.bold.magentaBright("This project will count the number of words and letters in your sentence."));
console.log(chalk.bold.magentaBright("-------------------------------------------------------------------------------"));
while (true) {
    let ans = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter your sentence: ",
            validate: function (input) {
                if (input.trim().length > 0) {
                    if (isNaN(parseFloat(input))) {
                        return true;
                    }
                    return "please enter a non-numeric value";
                }
                return "please enter a non-empty value";
            },
        },
    ]);
    let words = ans.sentence.trim().split(" ");
    let letters = ans.sentence.trim().split(" ").join("");
    console.log(chalk.bold.greenBright("--------------------------------------------------------------------------"));
    console.log(chalk.bold.greenBright(`Your sentence has : ${chalk.bold.yellowBright(words.length)} words and : ${chalk.bold.yellowBright(letters.length)} letters. `));
    console.log(chalk.bold.greenBright("--------------------------------------------------------------------------"));
    // console.log(chalk.bold.greenBright(" ---------------------------------------------------------------------- "));
}
