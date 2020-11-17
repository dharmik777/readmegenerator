const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js")

// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "What's the title?"
},
{
    type: "input",
    name: "description",
    message: "Enter Description"
},
{
    type: "input",
    name: "install",
    message: "Enter Installation Procedures"
},
{
    type: "input",
    name: "usage",
    message: "Enter Terms of Usage:"
},
{
    type: "input",
    name: "contribution",
    message: "Enter Contribution Guidelines"
},
{
    type: "input",
    name: "test",
    message: "Enter Test Instructions"
},

{
    type: "input",
    name: "github",
    message: "What's your Github Username:"
},
{
    type: "input",
    name: "email",
    message: "What's your email address:"
},
];
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log(err)
        }
        console.log('Write File Success!')
    })
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('README.md', answers)
    })
}
// function call to initialize program
init();