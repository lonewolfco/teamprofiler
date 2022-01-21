const Employee = require('../lib/Employee');

// first test for creating an employee object
test ('creates Employee object', () => {
    const employee = new Employee ('Lo', 7, 'loselby@icloud.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// name test from getName()
test('gets employee name', () => {
    const employee = new Employee ('Lo', 7, 'loselby@icloud.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// ID test from getId()
test('gets employee Id', () => {
    const employee = new Employee ('Lo', 7, 'loselby@icloud.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// email test from getEmail()
test('gets employee email', () => {
    const employee = new Employee ('Lo', 7, 'loselby@icloud.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// role test from getRole()
test('gets employee role', () => {
    const employee = new Employee ('Lo', 7, 'loselby@icloud.com');

    expect(employee.getRole()).toEqual('Employee');
})