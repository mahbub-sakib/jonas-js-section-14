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

// console.log(account);

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const sadia = Object.create(PersonProto);
console.log(sadia);
sadia.name = 'Sadia';
sadia.birthYear = 2002;
sadia.calcAge();

const sadiq = Object.create(PersonProto);
sadiq.init('Sadiq', 2022);
sadiq.calcAge();