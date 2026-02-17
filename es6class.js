'use strict';

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const sakib = new PersonCl('Sakib', 1990);
console.log(sakib);
sakib.calcAge();

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
}