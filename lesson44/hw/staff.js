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
                new CustomEvent("bookRemoved", { detail: removed })
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

        let totalYears = 0;
        let minYear = this.persons[0].year;
        let maxYear = this.persons[0].year;

        for (let i = 0; i < this.persons.length; i++) {
            const year = this.persons[i].year;
            totalYears += year;
            if (year < minYear) {
                minYear = year;
            }
            if (year > maxYear) {
                maxYear = year;
            }
        }

        const avgYear = totalYears / this.persons.length;

        return {
            totalPersons: this.persons.length,
            avgAge: avgYear.toFixed(2),
            minAge: minYear,
            maxAge: maxYear
        };
    }

    find(id) {
        let index = this.persons.findIndex(e => e.id === id);
        console.log(`found index ${index}, id=${id}`)
        if (index !== -1) {
            return this.persons[index];
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
        this.birthDate = birthDate;
    }

    toString() {
        return `id: ${this.id}; First Name: ${this.firstName}; Last Name: ${this.lastName}; Birth Date: ${this.birthDate};`;
    };
}
