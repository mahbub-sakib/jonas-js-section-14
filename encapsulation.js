'use strict';

class Account {
    locale = navigator.language;
    bank = 'Bankist';
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movement = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening account ${this.owner}`);
    }

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }

    #approveLoan(val) {
        return true;
    }
    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
    }
}

const acc1 = new Account('Sakib', 'TAKA', 1234);

// acc1.movement.push(250);
// acc1.movement.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.movements = [];

console.log(acc1);

acc1.pin = 1133;