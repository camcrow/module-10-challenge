const Intern = require('../lib/Intern.js');
const intern = new Intern('Cameron', '1234','cameronc2020@gmail.com','4321');

test('Checks for Manager requirements', () => {
    expect(intern.name).toBe('Cameron');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('cameronc2020@gmail.com');
    expect(intern.officeNumber).toBe('4321')
});

test('getName()method', () => {
expect(intern.getName()).toBe('Cameron')
})