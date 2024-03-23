#! usr/env/bin node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber= Math.floor(Math.random()*6 + 1);
let a = await inquirer.prompt([{
    name: "num",
    type: "number",
    message: chalk.bold.italic.black("Enter a number between 1 & 6"),
}])
if (a.num == randomNumber)
{
    console.log(chalk.bold.blue("Congratulation You enter a correct number "));
}
else
{
    console.log(chalk.bold.white("Sorry, you entered the wrong number."),"The correct number is ", chalk.bold.italic.red (randomNumber));
}


