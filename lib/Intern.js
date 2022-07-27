const Employee = require('./employee');

class Intern extends Employee {
    constructor(employee,school){
        super(employee.name,employee.id,employee.email);
        this.school = school;
        this.icon = 'school';
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern