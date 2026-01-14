const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

class Staff extends EventTarget {
    constructor() {
        super();
        this.persons = [];
    }

    add(person) {
        if (this.find(person.id) === -1) {
            this.persons.push(person);
            this.dispatchEvent(
                new CustomEvent("personAdded", { detail: person })
            );
            return true;
        }
        return false;
    }

    remove(id) {
        const index = this.find(id);
        if (index !== -1) {
            const removed = this.persons.splice(index, 1);
            this.dispatchEvent(
                new CustomEvent("personRemoved", { detail: removed })
            );
            return true;
        }
        return false;
    }

    getStats() {
        if (this.persons.length === 0) {
            return {
                totalPersons: 0,
                avgAge: 0,
                minAge: 0,
                maxAge: 0
            };
        }

        const now = new Date();
        let ages = this.persons.map(p => (now-p.birthDate)/MS_PER_YEAR);
        let minAge = ages.reduce((min, a) =>Math.min(min, a), Infinity);
        let maxAge = ages.reduce((min, a) =>Math.max(min, a), -Infinity);
        let totalAge = ages.reduce((acc, a) => acc + a, 0);

        const avgAge = totalAge / this.persons.length;

        return {
            totalPersons: this.persons.length,
            avgAge: avgAge.toFixed(2),
            minAge: minAge.toFixed(2),
            maxAge: maxAge.toFixed(2)
        };
    }

    find(id) {
        let index = this.persons.findIndex(e => e.id === id);
        console.log(`found index ${index}, id=${id}`)
        if (index !== -1) {
            return index;
        } else {
            return -1;
        }
    }
}



class Person {
    constructor(id, firstName, lastName, birthDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
    }

    toString() {
        return `id: ${this.id}; First Name: ${this.firstName}; Last Name: ${this.lastName}; Birth Date: ${this.birthDate};`;
    };
}
