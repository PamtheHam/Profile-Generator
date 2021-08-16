// STEPS FOR HOMEWORK 

// BUILD THE INQUIRER PROMPT:
// 1. Build the manager questions
// 2. Build the engineer questions
// 3. Build the intern questions

// BUILD THE HTML FILE
// 1. Create cards with css classes to attach the info to from the inquirer prompt
// 2. Connect the HTML file with the css file

// BUILD THE CSS FILE
// 1. Style the cards in the html file 


// EACH CLASS WILL HAVE THE FOLLOWING PROPERTIES AND METHODS:
// 1. Name
// 2. ID
// 3. Email
// 4. getName() method
// 5. getId() method
// 6. getEmail() method
// 7. getRole() method (returns role)

// MANAGER CLASS EXTENDS EMPLOYEE AND WILL ALSO NEED:
// 1. officeNumber
// 2. getRole() method (returns role(Manager) and overrides Employee)

// ENGINEER CLASS EXTENDS EMPLOYEE AND WILL ALSO NEED:
// 1. GitHub username
// 2. getGithub() method
// 3. getRole() method (returns role(Engineer) and overrides Employee)

// INTERN CLASS EXTENDS EMPLOYEE AND WILL ALSO NEED:
// 1. School
// 2. getSchool() method
// 3. getRole() method (returns role(Intern) and overrides Employee)

// CREATE A WALKTHROUGH VIDEO THAT INCLUDES:
// Demonstrates functionality
// Shows all 4 tests pass from the command line
// How the user invokes the application from the command line (node index.js)
// How the user enters responses to all the prompts 
// Shows the generated HTML file that matches user input

// MUST SUBMIT:
// 1. Link to walkthrough video
// 2. Github repository url
// 3. Sample HTML file generated by application


const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const employeeQuestions = () => {
   return inquirer.prompt([
        {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager?',
          },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s ID?',
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the manager\'s email address?',
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the manager\'s office number?',
      },
    //   if engineer, 
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?',
          },
      {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s ID?',
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s email address?',
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the engineer\'s GitHub username?',
      },
    //   if intern,
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern?',
          },
      {
        type: 'input',
        name: 'internId',
        message: 'What is the intern\'s ID?',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern\'s email address?',
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'What university does the intern attend?',
      },
    ]);
  };

const generateHTML = (answers) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
        <link rel="stylesheet" href="./Output/style.css">
        <title>Profile Generator</title>
    </head>
    <body>
        
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answers.managerName}</h5>
    <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${answers.managerId}</li>
    <li class="list-group-item">${answers.managerEmail}</li>
    <li class="list-group-item">${answers.managerOffice}</li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">  </h5>
    <p class="card-text"><i class="fas fa-glasses"></i> Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID number</li>
    <li class="list-group-item">email</li>
    <li class="list-group-item">office</li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">name</h5>
  <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID number</li>
  <li class="list-group-item">email</li>
  <li class="list-group-item">university</li>
</ul>
</div>
    </body>
    </html>`


  const init = () => {
    generateQuestions()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('An index.html file was successfully created with your input!'))
      .catch((err) => console.error(err));
  };
  
  init();