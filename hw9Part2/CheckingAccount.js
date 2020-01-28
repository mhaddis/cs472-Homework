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
        if (amount > this._balance) {
            let over = this._balance - amount;
            if (over > this._overdraft) {
                throw new RangeError("Overdraft amount is exceeded");
            } else {
                this._balance -= amount;
            }
        }
    }

    toString() {
        return ("Checking account " + this._number + ": balance " + this._balance + " overdraft: " + this._overdraft);
    }

    endOfMonth() {
        if (this._balance <= 0) {
            console.log("Warning, low balance checking account: " + this._number + " balance: " +
                this._balance + " overdraft limit: " + this._overdraft);
        }
    }
}
