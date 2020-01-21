/*jshint esversion: 6  */

(function() {
    "use strict";

    /**
     * calculator that sums and multiplies 2 values from prompt
     */
    let calculator = {
        aVal: 0,
        bVal: 0,

        /**
         * simple sum
         * @returns {number} sum of aval and bVal
         */
        sum() {
            return this.aVal + this.bVal;
        },

        /**
         * simple product of properties
         * @returns {number} product of properties
         */
        mul() {
            return this.aVal * this.bVal;
        },

        /**
         * prompts for and sets property values
         *  @returns {undefined}
         */
        read() {
            this.aVal = +prompt("a?", 0);
            this.bVal = +prompt("b?", 0);
        }
    };


    /* calculator.read();
     console.log(`sum is  ${calculator.sum()}`); */


    describe("calculator", function() {

        context("when 2 and 3 entered", function() {
            beforeEach(function() {
                /*sinon.stub(window, "prompt");

                prompt.onCall(0).returns("2");
                prompt.onCall(1).returns("3"); */

                calculator.aVal = 3;
                calculator.bVal = 2;
            });

            /*afterEach(function() {
              prompt.restore();
            }); */


            it("the sum is 5", function() {
                assert.equal(calculator.sum(), 5);
            });

            it("the multiplication product is 6", function() {
                assert.equal(calculator.mul(), 6);
            });
        });

    });


}());