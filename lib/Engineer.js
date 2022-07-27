const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employee,github){
        super(employee.name,employee.id,employee.email);
        this.github = github
        this.icon = 'engineering'
    }
    getGitHub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer