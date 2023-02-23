const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const createTeam = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Enter name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter name.');
                    return false;
                }
                
               }
            },
            {
                type:'input',
                name:'employeeId',
                message:'Enter ID.',
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log('Enter ID.');
                        return false;
                    }
                    
                   }
            },
            {
                type:'input',
                name:'email',
                message:'Enter email address.',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Enter email address.');
                        return false;
                    }
                
                    }
            },
            {
                type:'input',
            name:'officeNumber',
            message:'Enter office number.',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Enter office number.');
                    return false;
                }
                
               }
            },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        createTeam(); 
    })
};

const addMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name:'menu',
            message:'Select one of the following:',
            choices:['add an engineer', 'add an intern', 'finish building team']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case 'add an engineer':
                addEngineer();
                break;
            case 'add an intern':
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
};

const addEngineer = () => {
    return inquirer.prompt([
      
      {
        type: "input",
        name: "engName",
        message: "Enter name of engineer."
      },

      {
        type: "input",
        name: "engId",
        message: "Enter engineer ID." 
      },

      {
        type: "input",
        name: "engEmail",
        message: "Enter engineer's email"
      },

      {
        type: "input",
        name: "engGithub",
        message: "Enter engineer's GitHub username"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
      teamMembers.push(engineer);
      addMember();
    });
  };

  const addIntern = () => {
    return inquirer.prompt([
      
      {
        type: "input",
        name: "intName",
        message: "Enter name of intern."
      },

      {
        type: "input",
        name: "intId",
        message: "Enter intern ID." 
      },

      {
        type: "input",
        name: "intEmail",
        message: "Enter intern's email"
      },

      {
        type: "input",
        name: "intGithub",
        message: "Enter intern's GitHub username"
      }

    ]).then(answers => {
      const intern = new Intern(answers.intName, answers.intId, answers.intmail, answers.intGithub);
      teamMembers.push(intern);
      addMember();
    });
  };

  const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, buildTeam(teamMembers), "utf-8")
  }
  addMember();
