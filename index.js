// node modules
const inquirer = require('inquirer');
const fs = require('fs');
// link to webpage creator js
const generateHTML = require ('./src/generateHTML');
// link to team profile js files
// const Employee = require ('./lib/Employee.js');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');



// Team Profile array
const teamProfileArray = [];


// manager question prompts

const managerQuestions = () => {
  return inquirer.prompt ([
    {
        type: 'input',
        message: "Who is the manager on this team?",
        name: 'name',  
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log ("Please enter an employee's name!");
              return false; 
          }
        }
      },
      {
        type: 'input',
        message: "Submit the manager's ID.",
        name: 'id',
        validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
      },
      {
        type: 'input',
        message: "Submit the manager's email.",
        name: 'email',
        validate: email => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
              return true;
          } else {
              console.log ('Please enter an email!')
              return false; 
          }
        }
      },
      {
        type: 'input',
        message: "Submit the manager's office number.",
        name: 'officeNum',
        validate: nameInput => {
          if  (isNaN(nameInput)) {
              console.log ('Please enter an office number!')
              return false; 
          } else {
              return true;
          }
        }
      }
    ])
    
    .then(managerInput => {
      const  { name, id, email, officeNum } = managerInput; 
      const manager = new Manager (name, id, email, officeNum);

      teamProfileArray.push(manager); 
      console.log(manager); 
  })

  };

  

  const employeeQuestions = () => {
    console.log(`
    ---------------------------------
    Time to add employees to the team
    ---------------------------------
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What type of Employee is being added?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Submit the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Submit the engineer's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Submit the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, addMore } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamProfileArray.push(employee); 

        if (addMore) {
            return employeeQuestions(teamProfileArray); 
        } else {
            return teamProfileArray;
        }
    })

// };


.then((answers) => {

    const htmlTemplate = generateHTML (answers);
    
    
    fs.appendFile('index.html', htmlTemplate, (err) =>
        err ? console.error(err) : console.log('Response logged')

  )});

};

// const writeFile = data => {
//     const html = generateHTML(data);
//   fs.writeFile('./dist/index.html', html (data), (err) => {
//     // error
//     if (err) {
//       console.log(err);
//       return;
//       // no err
//     } else {
//       console.log("Team Profile Generated!");
//     }
//   })
// };

managerQuestions ()
  .then( employeeQuestions )
  .then (teamProfileArray => {
    return generateHTML(teamProfileArray);
  })
  .then(webHTML => {
    return writeFile(webHTML);
  })
  .catch(err => {
    console.log(err);
  });