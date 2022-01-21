const Employee = require('./Employee');

// extend Employee constructor with Engineer Class
class Engineer extends Employee {
    constructor (name, id, email, github){
        // call out parent Employee constructor
        super (name, id, email);
        this.github = github;
}
    // Applies Engineer as Employee Role
    getRole () {
        return 'Engineer';
    }

};

module.exports = Engineer;