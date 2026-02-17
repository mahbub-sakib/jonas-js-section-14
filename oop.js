'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}


const sakib = new Person('Sakib', 1990);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}
// console.log(Person.prototype)


sakib.calcAge();

// console.log(sakib.__proto__.__proto__)
// console.log(sakib.__proto__.constructor)
// console.dir(sakib.__proto__.constructor)

const arr = [3, 6, 5, 3, 8, 9];
console.log(arr.__proto__.__proto__)

// console.log(arr.__proto__ === Array.prototype)

const btn = document.querySelector('button');