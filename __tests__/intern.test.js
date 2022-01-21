const Intern = require('../lib/Intern');

// Intern object creation test
test('creates Intern object', () => {
    const intern = new Intern('Lo', 7, 'loselby@icloud.com', 'UW');

    expect(intern.school).toEqual(expect.any(String));
});

// test to get school data from getSchool()
test('gets Intern school value', () => {
    const intern = new Intern('Lo', 7, 'loselby@icloud.com', 'UW');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole test for Intern role
test('gets Intern role for Employee', () => {
    const intern = new Intern('Lo', 7, 'loselby@icloud.com', 'UW');

    expect(intern.getRole()).toEqual('Intern');
})