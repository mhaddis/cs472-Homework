/*jshint esversion: 6 */
"use strict";
class SavingsAccount extends Account {

    /**
     *
     * @param number
     * @param interest
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    /**
     *
     * @returns {*}
     */
    getInterest() {
        return this._interest;
    }

    /**
     *
     * @param value
     */
    setInterest(value) {
        this._interest = value;
    }

    /**
     *
     * @returns {string}
     */
    addInterest() {
        const balance = super.getBalance();
        const intAmount = (balance * this._interest) / 100;
        super.deposit(intAmount);
        return ("Savings account 1: " + this._number + " balance: " + this._balance + " interest: " + this._interest);
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        return ("SavingAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest);
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added " + this.toString();
    }
}