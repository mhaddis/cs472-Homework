/*jshint esversion: 6 */
"use strict";

class Bank {

    /**
     * constructor next number and accounts
     */
    constructor() {
        this._nextNumber = 1000;
        this._accounts = [];
    }

    /**
     *
     * @returns {number}
     */
    addAccount() {
        let acc = new Account(this._nextNumber);
        this._accounts.push(acc);
        this._nextNumber += 1;
        return acc.getNumber();
    }

    /**
     *
     * @param interest
     * @returns {number}
     */
    addSavingsAccount(interest) {
        let acc = new SavingsAccount(this._nextNumber, interest);
        this._accounts.push(acc);
        this._nextNumber += 1;
        acc.deposit(255);
        return acc.getNumber();
    }

    /**
     *
     * @param overdraft
     * @returns {number}
     */
    addCheckingAccount(overdraft) {
        let acc = new CheckingAccount(this._nextNumber, overdraft);
        this._accounts.push(acc);
        this._nextNumber += 1;

        return acc.getNumber();
    }

    /**
     *
     * @param number
     */
    closeAccount(number) {
        for (let accIndex in this._accounts) {
            if (this._accounts[accIndex].getNumber() === number) {
                this._accounts.splice(accIndex, 1);
            }
        }
    }

    /**
     *
     */
    accountReport() {
        for (let accIndex in this._accounts) {
            console.log(this._accounts[accIndex].toString());
        }
    }

    /**
     *
     */
    endOfMonth() {
        for (let accIndex in this._accounts) {
            this._accounts[accIndex].endOfMonth();
        }
    }
}