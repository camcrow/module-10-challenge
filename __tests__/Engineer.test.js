const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Cameron', '1234','cameronc2020@gmail.com','4321');

test('Checks for Manager requirements', () => {
    expect(engineer.name).toBe('Cameron');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('cameronc2020@gmail.com');
    expect(engineer.officeNumber).toBe('4321')
});

test('getName()method', () => {
expect(engineer.getName()).toBe('Cameron')
})