const Manager = require('../lib/Manager');
const employee = {
    name: 'This Name',
    id: 'This ID',
    email: 'This Email'
}
describe('Manager Class', () => {
    it("Get name returns the manager's name", () => {
      expect(new Manager(employee,"5456").getName()).toBe('This Name');
    });
    it("Get id returns the manager's id", () => {
        expect(new Manager(employee,"5456").getID()).toBe('This ID');
    });
    it("Get email returns the manager's email", () => {
        expect(new Manager(employee,"5456").getEmail()).toBe('This Email');
    });
    it("Get role returns the manager's role as MANAGER", () => {
        expect(new Manager(employee,"5456").getRole()).toBe('Manager');
    });
    it("Get role returns the manager's office number", () => {
        expect(new Manager(employee,"5456").getOfficeNumber()).toBe('5456');
    });
  });
