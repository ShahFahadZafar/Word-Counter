#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// This is a simple word counter project.

console.log(chalk.bold.magentaBright("\n ----------------------------- Word Counter -------------------------------- "));
console.log(chalk.bold.magentaBright ("\n Welcome to the word counter project.\n"));
console.log(chalk.bold.magentaBright("This project will count the number of words and letters in your sentence."));
console.log(chalk.bold.magentaBright("\n -------------------------------------------------------------- "));

while (true) {
let ans = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter your sentence: ",
    validate: function (value: string) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your sentence.";
      }
    },
  },
]);

let words = ans.sentence.trim().split(" ");
let letters = ans.sentence.trim().split(" ").join("");
console.log(chalk.bold.greenBright("\n --------------------------------------------------------------------- "));
console.log(chalk.bold.greenBright(` \n Your sentence has : ${words.length} words and : ${letters.length} letters. \n`));
console.log(chalk.bold.greenBright("\n ---------------------------------------------------------------------- "));
};





