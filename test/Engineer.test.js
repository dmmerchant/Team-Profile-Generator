const Engineer = require('../lib/Engineer');
const employee = {
    name: 'This Name',
    id: 'This ID',
    email: 'This Email'
}
describe('Engineer Class', () => {
    it("Get name returns the engineer's name", () => {
      expect(new Engineer(employee,"This gitHub").getName()).toBe('This Name');
    });
    it("Get id returns the employee's id", () => {
        expect(new Engineer(employee,"This gitHub").getID()).toBe('This ID');
    });
    it("Get email returns the employee's email", () => {
        expect(new Engineer(employee,"This gitHub").getEmail()).toBe('This Email');
    });
    it("Get role returns the employee's role as EMPLOYEEE", () => {
        expect(new Engineer(employee,"This gitHub").getRole()).toBe('Engineer');
    });
    it("Get role returns the employee's role as EMPLOYEEE", () => {
        expect(new Engineer(employee,"This gitHub").getGitHub()).toBe('This gitHub');
    });
  });
