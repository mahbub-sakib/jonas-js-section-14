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

// sakib.introduce();
// sakib.calcAge();

// console.log(sakib.__proto__);
// console.log(sakib.__proto__.__proto__);

Student.prototype.constructor = Student;

// console.dir(Student.prototype.constructor)

// console.log(sakib instanceof Student);
// console.log(sakib instanceof Person);
// console.log(sakib instanceof Object);


//----------------------------ES6 class--------------------------------------

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log('Hey there');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }

    calcAge() {
        console.log(`I am ${2037 - this.birthYear} years old, but as a student feels like ${2037 - this.birthYear + 10}`);
    }
}

const abony = new StudentCl('Sadia Afrin Abony', 1996, 'CSE');

// abony.introduce();
// abony.calcAge();

//--------------------------inheritence using Object.create----------------------

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const sadiq = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const shafin = Object.create(StudentProto);

shafin.init('Shafin', 2010, 'CSE');
shafin.introduce();
shafin.calcAge();