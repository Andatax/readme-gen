import inquirer from "inquirer";

inquirer
	.prompt([
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
	])
	.then((answers) => {});
