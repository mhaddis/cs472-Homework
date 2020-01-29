/*jshint esversion: 6 */
"use strict";
class CheckingAccount extends Account {

    /**
     *
     * @param number
     * @param overdraft
     */
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    /**
     *
     * @returns {*}
     */

    getOverdraft() {
        return this._overdraft;
    }

    /**
     *
     * @param v
     */
    setOverDraft(value) {
        this._overdraft = value;
    }


    /**
     *
     * @param amount of withdraw
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraft) {
            throw new Error("Overdraft amount is exceeded");
        }
        this._balance -= amount;
    }

    toString() {
        return ("Checking account " + this._number + ": balance: " + this._balance + " overdraft: " + this._overdraft);
    }

    endOfMonth() {
        let message = "";
        if (this._balance < 0) {
            message = "Warning, low balance " + this.toString();
        }
        return message;
    }
}
