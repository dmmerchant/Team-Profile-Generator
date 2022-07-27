const inquirer = require("inquirer");
const generateHTML = require("../utils/generateHTML");
const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const fs = require('fs');


class Team {
  constructor(name) {
    this.name = name
    this.members = []
  }
  //When a new team is created, the first question is who is the manager
  newTeam() {
    this.askEmployeeInfo('Manager')
  }

  //Ask whether or not to add another member
  askAddTeamMember() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Add another team member?"
        }
      ])
      .then(val => {
        if (val.choice) {
          this.askEmployeeType();
        } else {
          this.finalizeTeam();
        }
      });
  }

  //Determine what type of employee is being added
  askEmployeeType() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "type",
          message: "What is the employee's role?",
          choices: ['Engineer', 'Intern', 'General Employee']
        }
      ])
      .then(val => {
        this.askEmployeeInfo(val.type)
      });
  }

  //This is the basic info for all employees, regardless of their role
  askEmployeeInfo(type) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the ${type}'s name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is the ${type}'s id?`
        },
        {
          type: "input",
          name: "email",
          message: `What is the ${type}'s email?`
        }
      ])
      .then(val => {
        //Determine if further questions are required based on the selected role
        switch (type) {
          case 'Manager':
            this.askManagerInfo(val);
            break;

          case 'Intern':
            this.askInternInfo(val);
            break;

          case 'Engineer':
            this.askEngineerInfo(val);
            break;

          //If it is a basic employee, no further questions. Employee is pushed to the members array
          case 'General Employee':
            this.members.push(new Employee(val.name, val.id, val.email));
            this.askAddTeamMember();
            break
        }

      });
  }
  askManagerInfo(employee) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?"
        }
      ])
      .then(val => {
        this.members.push(new Manager(employee, val.officeNumber));
        this.askAddTeamMember();
      });
  }

  askEngineerInfo(employee) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "github",
          message: "What is the engineer's github?"
        }
      ])
      .then(val => {
        this.members.push(new Engineer(employee, val.github));
        this.askAddTeamMember();
      });
  }

  askInternInfo(employee) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "school",
          message: "What is the intern's school?"
        }
      ])
      .then(val => {
        this.members.push(new Intern(employee, val.school));
        this.askAddTeamMember();
      });
  }

  finalizeTeam() {
    var fileName = this.name.replace(/[\W_]+/g, '');
    const htmlContent = generateHTML(this);
    fs.writeFile('./dist/' + fileName + '.html', htmlContent, (err) =>
      err ? console.log(err) : console.log('Successfully created HTML')
    );
    fs.writeFile('./dist/style.css', `.card-header {background-color: cornflowerblue;}`, (err) =>
      err ? console.log(err) : console.log('Successfully created CSS')
    );
    
  }
}

module.exports = Team