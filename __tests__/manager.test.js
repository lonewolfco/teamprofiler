const Manager = require('../lib/Manager');

// engineer object creation test
test('creates Manager object', () => {
    const manager = new Manager('Lo', 7, 'loselby@icloud.com', '1234567890');

    expect(manager.officeNum).toEqual(expect.any(String));
});

// test to get officeNum data from getOfficeNum)
test('gets manager office number value', () => {
    const manager = new Manager('Lo', 7, 'loselby@icloud.com', '1234567890');

    expect(manager.getOfficeNum()).toEqual(expect.stringContaining(manager.officeNum.toString()));
});

// getRole test for Engineer role
test('gets Manager role for Employee', () => {
    const manager = new Manager('Lo', 7, 'loselby@icloud.com', '1234567890');

    expect(manager.getRole()).toEqual('Manager');
})