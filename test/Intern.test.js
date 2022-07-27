const Intern = require('../lib/Intern');
const employee = {
    name: 'This Name',
    id: 'This ID',
    email: 'This Email'
}
describe('Intern Class', () => {
    it("Get name returns the Intern's name", () => {
      expect(new Intern(employee,"WPI").getName()).toBe('This Name');
    });
    it("Get id returns the Intern's id", () => {
        expect(new Intern(employee,"WPI").getID()).toBe('This ID');
    });
    it("Get email returns the Intern's email", () => {
        expect(new Intern(employee,"WPI").getEmail()).toBe('This Email');
    });
    it("Get role returns the Intern's role as Intern", () => {
        expect(new Intern(employee,"WPI").getRole()).toBe('Intern');
    });
    it("Get role returns the Intern's office number", () => {
        expect(new Intern(employee,"WPI").getSchool()).toBe('WPI');
    });
  });
