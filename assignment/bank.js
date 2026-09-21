"use strict";
class BankAccount {
    balance = 0;
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayBalance() {
        console.log("Balance =", this.balance);
    }
}
let acc = new BankAccount();
acc.deposit(1000);
acc.withdraw(300);
acc.displayBalance();
