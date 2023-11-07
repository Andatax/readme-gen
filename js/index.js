import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./generateMarkdown.js";

// Array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your README file for your project?",
	},
	{
		type: "input",
		name: "description",
		message: "Provide a description for your project:",
	},
	{
		type: "input",
		name: "installation",
		message: "Provide installation instructions for your project:",
	},
	{
		type: "input",
		name: "usage",
		message: "Enter usage information for your project:",
	},
	{
		type: "list",
		name: "license",
		message: "Choose a license for your project:",
		choices: ["MIT", "Apache", "GPL"],
	},
	{
		type: "input",
		name: "contributing",
		message: "Please provide contribution guidelines for your project:",
	},
	{
		type: "input",
		name: "tests",
		message: "Please provide instructions for testing your project.",
	},
	{
		type: "input",
		name: "github",
		message: "Please enter your GitHub username:",
	},
	{
		type: "input",
		name: "email",
		message: "Please enter your email address:",
	},
];

// Function to write README file
function writeToFile(fileName, data) {
	const readmeContent = generateMarkdown(data);
	fs.writeFile(fileName, readmeContent, err => {
		err ? console.error(err) : console.log("README.md has been generated successfully!");
	});
}

// Function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then(answers => {
			writeToFile("README-Ouput/README.md", answers);
		})
		.catch(error => {
			error.isTtyError
				? console.log("Prompt couldn't be rendered in the current environment")
				: console.log(error);
		});
}

// Function call to initialize app
init();
