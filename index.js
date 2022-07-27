const Team = require("./lib/Team");
const inquirer = require("inquirer");

function init() {
  console.log("Welcome to the team generator. Lets start by naming your team...")
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team name?"
      }
    ])
    .then(val => {
      const newTeam = new Team(val.name);
      newTeam.newTeam()
        
    });
}

init()