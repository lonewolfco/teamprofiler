const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        // calls out parent Employee constructor
        super(name, id, email);
        this.school = school;
    }
    // Applies Intern as Employee Role
    getRole () {
        return 'Intern';
    }

}


module.exports = Intern;