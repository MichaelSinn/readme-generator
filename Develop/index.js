// Required packages
const inquirer = require("inquirer");
const fs = require("fs")
const md = require("./utils/generateMarkdown.js");

// Questions for inquirer
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please input a title:"
    },
    {
        type: "input",
        name: "description",
        message: "Please input a description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please input installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please input usage information:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please input contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please input test instructions:"
    },
    {
        type: "input",
        name: "email",
        message: "Please input a contact email:"
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license:",
        choices: ["MIT", "IBM", "ISC"]
    },
    {
        type: "input",
        name: "github",
        message: "Please input your GitHub username:"
    },
];

// Writes the data to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, e => {
        e ? console.log(`Error ${e}`) : console.log(`Successfully wrote to ${fileName}`); // Checks for a successful write
    });

}

function init() {
    // Get the questions
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md", md(response)); // Write the README from the responses
    });
}

// Function call to initialize app
init();
