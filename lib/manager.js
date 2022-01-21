
const Employee = require('./Employee');

// Extend Employee Constructor with Manager Class
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        // calls out parent Employee Constructor
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNum () {
        return this.officeNum;
    }
    // Applies Manager as Employee Role
    getRole () {
        return 'Manager';
    }
};


module.exports = Manager;