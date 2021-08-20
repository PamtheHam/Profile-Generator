 const employeeQuestions = [
     {
       type: 'list',
       name: 'role',
       message: 'What is the role of the employee?',
       choices: ['Engineer', 'Intern', 'Manager'],
     },
     {
         type: 'input',
         name: 'name',
         message: 'What is the name of the employee?',
     },
     {
         type: 'input',
         name: 'id',
         message: 'What is the employee\'s ID?',
     },
     {
         type: 'input',
         name: 'email',
         message: 'What is the employee\'s email address?',
     },
    ]


    const managerQuestions = [
        {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
      },
    ]

    const engineerQuestions = [
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
        },
    ]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'What university does the intern attend?',
        when: (input) => input.role === 'Intern'
    },
]

const newEmployee = [
     {
         type: 'list',
         name: 'newEmployee',
         message: 'Would you like to add another employee?',
         choices: ['Yes', 'No'],
     },
   ];

   module.exports = {
       newEmployee,
       internQuestions,
       engineerQuestions,
       employeeQuestions,
       managerQuestions,
   }
 
