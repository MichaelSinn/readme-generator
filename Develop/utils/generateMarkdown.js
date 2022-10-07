// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) return "";
    // Object containing the different license badges
    const licenseBadges = {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }
    return licenseBadges[license];
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) return "";
    // Object containing the different license links
    const licenseLinks = {
        MIT: "https://opensource.org/licenses/MIT",
        ISC: "https://opensource.org/licenses/ISC",
        IBM: "https://opensource.org/licenses/IPL-1.0"
    }
    return licenseLinks[license];
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) return "";
    // Return the license section text
    return `This project is covered under the license of ${license}. More information about this license: ${renderLicenseLink(license)}`;
}

function generateMarkdown(data) {
    // Deconstruct data into variables
    const {title, description, installation, usage, contribution, tests, email, license, github} = data;
    // Get license badge
    const licenseBadge = renderLicenseBadge(license);
    // Return the README
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
