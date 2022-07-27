const Employee = require('./employee');

class Manager extends Employee {
    constructor(employee,officeNumber){
        super(employee.name,employee.id,employee.email);
        this.officeNumber = officeNumber;
        this.icon = 'star';
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}
module.exports = Manager