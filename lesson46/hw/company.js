// Храним и возвращаем данные так, чтобы их невозможно было попротить снаружи.
// 1. Используем отдельные классы ...Data,
// чтобы они поддавались глубокому копированию через structuredClone().
// 2. Используем structuredClone.

class Company extends EventTarget {
    constructor() {
        super();
        this._employees = [];
    }

    add(employee) {
        if (this.find(employee.id) === -1) {
            this._employees.push(employee);
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
            const removed = this._employees.splice(index, 1);
            this.dispatchEvent(
                new CustomEvent("employeeRemoved", { detail: removed })
            );
            return true;
        }
        return false;
    }

    getStats() {
        if (this._employees.length === 0) {
            return {
                totalPersons: 0,
                avgAge: 0,
                minAge: 0,
                maxAge: 0
            };
        }

        /** @type {number[]} */
        let ages = this._employees.map(p => p.age);
        let minAge = Math.min(...ages);
        let maxAge = Math.max(...ages);
        let totalAge = ages.reduce((acc, a) => acc + a, 0);

        const avgAge = totalAge / this._employees.length;

        return {
            totalPersons: this._employees.length,
            avgAge: avgAge.toFixed(2),
            minAge: minAge.toFixed(2),
            maxAge: maxAge.toFixed(2)
        };
    }

    find(id) {
        let index = this._employees.findIndex(e => e.id === id);
        console.log(`found index ${index}, id=${id}`)
        if (index !== -1) {
            return index;
        } else {
            return -1;
        }
    }

    get employees () {
        const data_copy = this._employees.map(e => e._data);
        return structuredClone(data_copy);
    }
}

class PersonData {
    constructor(id, firstName, lastName, birthdate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = new Date(birthdate);
    }
}

class EmployeeData extends PersonData {
    constructor(id, firstName, lastName, birthdate, salary) {
        super(id, firstName, lastName, birthdate);
        this.salary = salary;
    }
}

class Person {
    constructor(data) {
        this._data = data;
    }

    get id() { return this._data.id; }
    get firstName() { return this._data.firstName; }
    get lastName() { return this._data.lastName; }
    get birthdate() { return this._data.birthdate; }

    get age() {
        const diff = Date.now() - this.birthdate;
        return new Date(diff).getUTCFullYear() - 1970;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toString() {
        return `id: ${this.id}; ${this.fullName}`;
    }
}

class Employee extends Person {
    constructor(data) {
        super(data);
    }

    get salary() { return this._data.salary; }

    set salary(value) {
        if (value > this._data.salary) {
            this._data.salary = value;
        }
    }
}

