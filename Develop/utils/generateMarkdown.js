// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) return "";
    const licenseBadges = {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }
    return licenseBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) return "";
    const licenseLinks = {
        MIT: "https://opensource.org/licenses/MIT",
        ISC: "https://opensource.org/licenses/ISC",
        IBM: "https://opensource.org/licenses/IPL-1.0"
    }
    return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) return "";
    return `This project is covered under the license of ${license}. More information about this license: ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const {title, description, installation, usage, contribution, tests, email, license, github} = data;
    const licenseBadge = renderLicenseBadge(license);
    return `# ${title}
${licenseBadge}\n
## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contribution}

## License

${renderLicenseSection(license)}

---

## How to Contribute

${contribution}

## Tests

${tests}

## Questions

${email} - Please reach out to this email with any additional questions
https://github.com/${github}`;
}

module.exports = generateMarkdown;
