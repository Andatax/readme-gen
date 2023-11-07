function renderLicenseBadge(license) {
	return !license ? "" : `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	return !license ? "" : `\n* [License](#license)\n`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	return !license
		? ""
		: `## License

This project is licensed under the ${license} license.`;
}
// Function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
| Section | Description|
|---------------|-----------------------|
| [Installation](#installation) | Instructions for installation. |
| [Usage](#usage) | How to use the project. |
| ${renderLicenseLink(data.license)} | License information. |
| [Contributing](#contributing) | Guidelines for contributing. |
| [Tests](#tests) | Information on running tests. |
| [Questions](#questions) | Contact details for questions. |

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`
## Questions
For any additional questions, you can reach me at: [${data.github}](https://github.com/${data.github}) 
Email: ${data.email}
${renderLicenseSection(data.license)}`;
}

export default generateMarkdown;
