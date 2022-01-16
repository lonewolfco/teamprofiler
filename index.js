var inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require ('./lib/generateHtml.js');
const employee = require ('./lib/employee.js');
const engineer = require ('./lib/engineer.js');
const intern = require ('./lib/intern.js');
const manager = require ('./lib/manager.js');
const bootstrap = require('bootstrap');


// user questions to create the team profiler data
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'What is a fun fact about you?',
        name: 'funfact',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'github',
      },
    ])  







.then((answers) => {

    const htmlTemplate = generateHtml (answers);
    
    
    fs.appendFile('index.html', htmlTemplate (answers), (err) =>
        err ? console.error(err) : console.log('Response logged')

  )});