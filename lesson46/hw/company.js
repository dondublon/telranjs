const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

class Company extends EventTarget {
    constructor() {
        super();
        this.employees = [];
    }

    add(employee) {
        if (this.find(employee.id) === -1) {
            this.employees.push(employee);
            this.dispatchEvent(
                new CustomEvent("employeeAdded", { detail: employee })
            );
            return true;
        }
        return false;
    }

    remove(id) {
        const index = this.find(id);
        if (index !== -1) {
            const removed = this.employees.splice(index, 1);
            this.dispatchEvent(
                new CustomEvent("employeeRemoved", { detail: removed })
            );
            return true;
        }
        return false;
    }

    getStats() {
        if (this.employees.length === 0) {
            return {
                totalPersons: 0,
                avgAge: 0,
                minAge: 0,
                maxAge: 0
            };
        }

        const now = new Date();
        /** @type {number[]} */
        let ages = this.employees.map(p => p.age);
        let minAge = Math.min(...ages);
        let maxAge = Math.max(...ages);
        let totalAge = ages.reduce((acc, a) => acc + a, 0);

        const avgAge = totalAge / this.employees.length;

        return {
            totalPersons: this.employees.length,
            avgAge: avgAge.toFixed(2),
            minAge: minAge.toFixed(2),
            maxAge: maxAge.toFixed(2)
        };
    }

    find(id) {
        let index = this.employees.findIndex(e => e.id === id);
        console.log(`found index ${index}, id=${id}`)
        if (index !== -1) {
            return index;
        } else {
            return -1;
        }
    }
}



class Person {
    constructor(id,firstName,lastName,birthdate){
        this._id=id;
        this._firstName=firstName;
        this._lastName=lastName;
        this._birthdate = new Date(birthdate);
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    set birthDate(value) {
        this._birthDate = value;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthdate;
        const ageDate = new Date(ageDiffMs);
        return ageDate.getUTCFullYear() - 1970;

    }

    fullName = function(){
        return `${this._firstName} ${this._lastName}`;
    }
    toString() {
        return `id: ${this.id}; First Name: ${this.firstName}; Last Name: ${this.lastName}; Birth Date: ${this.birthDate};`;
    };
}

class Employee extends Person {
    constructor(id,firstName,lastName,birthdate,salary ){
        super(id,firstName,lastName,birthdate);
        this._salary = +salary;
    }

    get salary(){
        return this._salary;
    }

    set salary (value){
        if(value>this._salary){
            this._salary=value;
        }
    }
}

