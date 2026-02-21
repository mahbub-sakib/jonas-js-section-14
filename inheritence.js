'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const sakib = new Student('Sakib', 2000, 'CSE');

sakib.introduce();
sakib.calcAge();

console.log(sakib.__proto__);
console.log(sakib.__proto__.__proto__);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor)

console.log(sakib instanceof Student);
console.log(sakib instanceof Person);
console.log(sakib instanceof Object);