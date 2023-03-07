const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Gather information about the development team members
const managerQuestions = [
    {
        name: 'name',
        message: 'Enter the Project Manager\'s name:',
        type: 'input',
        validate: (name) => { return name === '' ? 'Please enter a name' : true; }
    },
    {
        name: 'id',
        message: 'Enter the Project Manager\'s ID:',
        type: 'input',
        validate: (id) => { return isNaN(id) ? 'Please enter a number' : true; }
    },
    {
        name: 'email',
        message: 'Enter the Project Manager\'s email:',
        type: 'input',
        validate: (email) => { return ((/\S+@\S+\.\S+/).test(email)) ? true : 'Must be a valid email'; }
    },
    {
        name: 'officeNumber',
        message: 'Enter the Project Manager\'s office #:',
        type: 'input',
        validate: (officeNumber) => { return isNaN(officeNumber) ? 'Please enter a number' : true; }
    },
];

const engineerQuestions = [
    {
        name: 'name',
        message: 'Enter the Engineer\'s name:',
        type: 'input',
        validate: (name) => { return name === '' ? 'Please enter a name' : true; }
    },
    {
        name: 'id',
        message: 'Enter the Engineer\'s ID:',
        type: 'input',
        validate: (id) => { return isNaN(id) ? 'Please enter a number' : true; }
    },
    {
        name: 'email',
        message: 'Enter the Engineer\'s email:',
        type: 'input',
        validate: (email) => { return (email.split('').find(char => char === '@')) ? true : 'Must be a valid email'; } // this needs to be changed
    },
    {
        name: 'github',
        message: 'Enter the Engineer\'s GitHub username',
        type: 'input',
        validate: (github) => { return github === '' ? 'Please enter a username' : true; }
    },
];

const internQuestions = [
    {
        name: 'name',
        message: 'Enter the Intern\'s name:',
        type: 'input',
        validate: (name) => { return name === '' ? 'Please enter a name' : true; }
    },
    {
        name: 'id',
        message: 'Enter the Intern\'s ID:',
        type: 'input',
        validate: (id) => { return isNaN(id) ? 'Please enter a number' : true; }
    },
    {
        name: 'email',
        message: 'Enter the Intern\'s email:',
        type: 'input',
        validate: (email) => { return (email.split('').find(char => char === '@')) ? true : 'Must be a valid email'; } // this needs to be changed
    },
    {
        name: 'school',
        message: 'Enter the Intern\'s school or university',
        validate: (school) => { return school === '' ? 'Please enter a school or university name' : true; },
    },
];

const queryQuestion = {
    name: 'choice',
    message: 'What would you like to do next?',
    type: 'list',
    choices: [
        'Create an Engineer',
        'Create an Intern',
        'Exit Program'
    ]
};

// Render the HTML file.