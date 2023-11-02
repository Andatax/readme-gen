import inquirer from "inquirer";
import fs from "fs";

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
	.then(answers => {
		const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
| Section       | Description           |
|---------------|-----------------------|
| [Installation](#installation) | Instructions for installation. |
| [Usage](#usage)               | How to use the project. |
| [License](#license)           | License information. |
| [Contributing](#contributing) | Guidelines for contributing. |
| [Tests](#tests)               | Information on running tests. |
| [Questions](#questions)       | Contact details for questions. |

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any additional questions, you can reach me at: [${answers.github}](https://github.com/${answers.github})  
Email: ${answers.email}`;

		fs.writeFile("README.md", readmeContent, err => {
			err ? console.error(err) : console.log("README.md has been generated successfully!");
		});
	})
	.catch(error => {
		error.isTtyError
			? console.log("Prompt couldn't be rendered in the current environment")
			: console.log(error);
	});
