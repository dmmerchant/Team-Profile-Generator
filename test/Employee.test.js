const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    it("Get name returns the employee's name", () => {
      expect(new Employee('This Name','This ID','This Email').getName()).toBe('This Name');
    });
    it("Get id returns the employee's id", () => {
        expect(new Employee('This Name','This ID','This Email').getID()).toBe('This ID');
    });
    it("Get email returns the employee's email", () => {
        expect(new Employee('This Name','This ID','This Email').getEmail()).toBe('This Email');
    });
    it("Get role returns the employee's role as EMPLOYEEE", () => {
        expect(new Employee('This Name','This ID','This Email').getRole()).toBe('Employee');
      });
  });