const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input', 
        message: 'What is the title of your project?',
        name: 'title',
    },
    {   
        type: 'input',
        message:'Please add a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How would a user install this application?',
        name: 'installation',
    },
    {   
        type: 'input',
        message:'Add the usage information.',
        name: 'usage',
    },
    {   
        type: 'input',
        message:'Add any contribution guidelines or contributors.',
        name: 'contributors',
    },
    {   
        type: 'input',
        message:'Enter the test instructions.',
        name: 'tests'
    },
    {   
        type: 'list',
        message:'Choose a license.',
        name: 'license',
        choices: ["Apache", "GNU", "MIT","ISC","None"]
    },
    {   
        type: 'input',
        message:'What is your github username?',
        name: 'github'
    },
    {   
        type: 'input',
        message:'What is your email address?',
        name: 'email'
    },
    {   
        type: 'input',
        message:'What is your contact information?',
        name: 'contactInfo'
    },
    {   
        type: 'input',
        message:'What would you like to name this file?',
        name: 'fileName'
    },

];

// TODO: Create a function to write README file
function writeToFile(input) {
    fs.writeFileSync(`${input.fileName}.md`, markdown(input))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((input) => {
        writeToFile(input);
    });
};

// Function call to initialize app
init();
