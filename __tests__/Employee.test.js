const Employee = require('../lib/Employee.js');
const employee = new Employee('Cameron', 1234,'cameronc2020@gmail.com');

test('Checks for Employee requirements', () => {
    expect(employee.name).toEqual(expect.any(String));
    console.log(`Employee Name: ${employee.name}`)
    expect(employee.id).toEqual(expect.any(Number));
    console.log(`Employee ID: ${employee.id}`)
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employee Email: ${employee.email}`)
});

