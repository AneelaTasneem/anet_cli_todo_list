#!/usr/bin/env node


// Import necessary libraries
import inquirer from "inquirer"; // For user prompts
import chalk from "chalk";       // For coloring text in the console
import ora from "ora";           // For displaying loading spinner

// Create a loading spinner
const spinner = ora("Loading...");

// Initialize an empty array to store todos
let toDos: any = [];

// Initialize a condition to control the while loop
let condition = true;

// Define an async function to handle user input and display todos
async function main() {
    // Loop until condition is false
    while (condition) {
        // Ask user for todo item and whether to add more
        let toDoQuestions = await inquirer.prompt([
            {
                name: "firstQuestion",
                type: "input",
                message: " What would you like to add in your todos?",
                // prefix: chalk.blue("➕"), // Display a blue plus sign before the question
                prefix: chalk.blue("\u2795")
            }, 
            {
                name: "secondQuestion",
                type: "confirm",
                message: "Would you like to add more in your todos?",
                default: "true",
                prefix: chalk.yellow("🔄"), // Display a yellow loop icon before the question
                // prefix: chalk.yellow("\u{1F501} ")
            },
        ]);

        // Add the todo item to the array
        toDos.push(toDoQuestions.firstQuestion);

        // Display current todos
        console.log(chalk.green("To-dos:"));
        toDos.forEach((todo: any, index: any) => {
            console.log(chalk.green(`  ${index + 1}. ${todo}`));
        });

        // Update condition based on user input
        condition = toDoQuestions.secondQuestion;
    }

    // Display a loading spinner
    spinner.start();

    // Simulate saving todos (after 2 seconds in this case)
    setTimeout(() => {
        spinner.stop(); // Stop the spinner
        console.log(chalk.green("To-dos saved!")); // Display a message indicating todos are saved
    }, 2000);
}

// Call the main function to start the program
main();