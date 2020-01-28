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

})();

