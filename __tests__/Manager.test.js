const Manager = require('../lib/Manager.js');
const manager = new Manager('Cameron', '1234','cameronc2020@gmail.com','4321');

test('Checks for Manager requirements', () => {
    expect(manager.name).toBe('Cameron');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('cameronc2020@gmail.com');
    expect(manager.officeNumber).toBe('4321')
});

test('getName()method', () => {
expect(manager.getName()).toBe('Cameron')
})