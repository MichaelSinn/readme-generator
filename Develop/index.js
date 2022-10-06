let inquirer = require("inquirer");
let fs = require("fs")

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please input a title:",
        default: "title"
    },
    {
        type: "input",
        name: "description",
        message: "Please input a description:",
        default: "description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please input installation instructions:",
        default: "install"
    },
    {
        type: "input",
        name: "usage",
        message: "Please input usage information:",
        default: "usage"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please input contribution guidelines:",
        default: "contribute"
    },
    {
        type: "input",
        name: "test",
        message: "Please input test instructions:",
        default: "test"
    },
    {
        type: "input",
        name: "email",
        message: "Please input a contact email:",
        default: "email"
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
        message: "Please input your GitHub username:",
        default: "github"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, e=>{
        e ? console.log(`Error ${e}`) : console.log(`Successfully wrote to ${fileName}`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        const {title, description, installation, usage, contribution, test, email, license, github} = response;
        console.log(title, description, installation, usage, contribution, test, email, license, github);
    });
}

// Function call to initialize app
init();
