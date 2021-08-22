const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const Manager = require('./Lib/Manager');
const Engineer = require('./Lib/Engineer');
const Intern = require('./Lib/Intern');
const generateHTML = require('./src/generateHTML')
const { employeeQuestions, managerQuestions, internQuestions, engineerQuestions, newEmployee, } = require('./src/employeeQuestions')

const managerArr = [];
const engineerArr = [];
const internArr = [];


const buildTeam = async () => {
  let employee = await inquirer.prompt(employeeQuestions);

  try {

    switch (employee.role) {

      case 'Manager':
        let officeName = await inquirer.prompt(managerQuestions);
        const manager = new Manager(
          employee.name,
          employee.id,
          employee.email,
          officeName.officeNumber,
        );
        managerArr.push(manager);
        break;

      case 'Engineer':
        let gitHubName = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(
          employee.name,
          employee.id,
          employee.email,
          gitHubName.github,
        );
        engineerArr.push(engineer);
        break;

      case 'Intern':
        let schoolName = await inquirer.prompt(internQuestions);
        const intern = new Intern(
          employee.name,
          employee.id,
          employee.email,
          schoolName.school,
        );
        internArr.push(intern);
        break;

      default: "";
    }
  } 
  catch (error) {
    console.log(error);
  }
};

const newEmployees = async () => {
  let addNewEmployee = 'Yes';
  let addMoreEmployees;
  while(addNewEmployee === 'Yes'){
    addMoreEmployees = await inquirer.prompt(newEmployee);
    addNewEmployee = await addMoreEmployees.addAnotherEmployee;

    if (addNewEmployee === 'Yes') {
      await buildTeam();
    }
  }
};

const init = async () => {
  try {
    await buildTeam();
    await newEmployees();
    await writeFileAsync('index.html', generateHTML(managerArr, engineerArr, internArr));
      console.log('An index.html file was successfully created with your input!');
  }
  catch(err) {
    console.error(err);
  } 
};

init();