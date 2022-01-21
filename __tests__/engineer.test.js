const Engineer = require('../lib/Engineer');

// engineer object creation test
test('creates Engineer object', () => {
    const engineer = new Engineer('Lo', 7, 'loselby@icloud.com', 'lonewolfco');

    expect(engineer.github).toEqual(expect.any(String));
});

// test to get github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Lo', 7, 'loselby@icloud.com', 'lonewolfco');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole test for Engineer role
test('gets Engineer role for Employee', () => {
    const engineer = new Engineer('Lo', 7, 'loselby@icloud.com', 'lonewolfco');

    expect(engineer.getRole()).toEqual('Engineer');
})