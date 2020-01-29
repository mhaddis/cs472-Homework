/*jshint esversion: 6 */
(function() {
    "use strict";
    const accObj = new Account(200);
    describe("Account class MochaTest", function() {
        context("add balance function MochaTest", function() {
            accObj.deposit(230);
            it("unit test for get balance", function() {
                assert.equal(accObj.getBalance(), 360);
            });
        });
        context("withdraw function MochaTest , reduce from 230 to 130", function() {
            accObj.deposit(230);
            accObj.withdraw(100);
            it("unit test for withraw", function() {
                assert.equal(accObj.getBalance(), 360);
            });

        });
        context("get number and toString MochaTest", function() {
            it("unit test get number 200", function() {
                assert.equal(accObj.getNumber(), 200);
            });
            it("unit test to string Account 200: balance 360", function() {
                assert.equal(accObj.toString(), 'Account 200: balance 360');
            });
        });
    });

//Test For Saving Account
    describe("SavingsAccount", () => {
        let savings = undefined;
        describe("constructor(number, interest)", () => {
            it("takes a number and an interest rate and makes a Savings account", () => {
                savings = new SavingsAccount(1, 5);
                assert.equal(savings.getNumber(), 1);
                assert.equal(savings.getInterest(), 5);
                assert.equal(savings.constructor, SavingsAccount);
            });
        });
        describe("interest getter / setter", () => {
            it("can get the interest rate for this account", () => {
                assert.equal(savings.getInterest(), 5);
            });
            it("can set the interest rate for this account", () => {
                savings.setInterest(6);
                assert.equal(savings.getInterest(), 6);
            });
        });

        describe("addInterest() method", () => {
            it("adds the calculated interest to this account", () => {
                savings.setInterest(5);
                savings.deposit(100);
                savings.addInterest();
                assert.equal(savings.getBalance(), 105);
            });
        });

        describe("toString() method", () => {
            it("returns a string representation of the SavingsAccount", () => {
                assert.equal("SavingAccount 1: balance: 105 interest: 5", savings.toString());
            });
        });

        describe("endOfMonth() method", ()=>{
            it("returns a string saying that interest was added", ()=>{
                savings.withdraw(5);
                assert.equal(savings.endOfMonth(), "Interest added SavingAccount 1: balance: 105 interest: 5");
            });
        });
    });

//Test For Checking Account
    describe("CheckingAccount", () => {
        let checking = undefined;
        describe("constructor(number, overdraft)", () => {
            it("takes a number and the overdraft limit and makes a checking account", () => {
                checking = new CheckingAccount(1, 200);
                assert.equal(checking.getNumber(), 1);
                assert.equal(checking.getOverdraft(), 200);
                assert.equal(checking.constructor, CheckingAccount);
            });
        });
        describe("overdraft getter / setter", () => {
            it("can get the overdraft limit for this account", () => {
                assert.equal(checking.getOverdraft(), 200);
            });
            it("can set the overdraft limit for this account", () => {
                checking.setOverDraft(250);
                assert.equal(checking.getOverdraft(), 250);
            });
        });
        describe("withdraw(amount) method", () => {
            it("can withdraw into negative up to the overdraft limit", () => {
                checking.withdraw(200);
                assert.equal(checking.getBalance(), -200);
            });
            it("throws an error if you go beyond the limit", () => {
                let makeError = () => {
                    checking.withdraw(100);
                };
                assert.throws(makeError, Error, "Overdraft amount is exceeded");
            });
            it("throws a RangeError if you give a number <= 0", () => {
                let makeError = () => {
                    checking.deposit(-1);
                };
                assert.throws(makeError, RangeError, "Deposit amount has to be greater than zero");
            });
        });
        describe("toString() method", () => {
            it("returns a string representation of the SavingsAccount", () => {
                assert.equal('Checking account 1: balance: -200 overdraft: 250', checking.toString());
            });
        });
        describe("endOfMonth() method", ()=>{
            it("returns a warning string when the balance is below zero", ()=>{
                assert.equal(checking.endOfMonth(), 'Warning, low balance Checking account 1: balance: -200 overdraft: 250');
            });
            it("returns an empty string when balance above zero", ()=>{
                checking.deposit(1000);
                assert.equal(checking.endOfMonth(), "");
            });
        });

    });

})();

