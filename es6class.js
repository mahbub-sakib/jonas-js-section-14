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
// console.log(sakib);
sakib.calcAge();

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
}


// -----------getter and setter------------

const account = {
    owner: 'Sakib',
    movements: [300, 150, 500, 1000, 200],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

account.latest = 20;

// console.log(account.latest)

console.log(account);