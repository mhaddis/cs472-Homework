/*jshint esversion: 6 */
(function (){
    'use strict'
    //1....banned words
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned).join(" ");
}
    describe("InheritanceMochaTesting", function() {
        it("Banned Words", function () {
            assert.equal("I am not smart".filter("not"), "I am smart");
        });
    });

//2.....buuble sort algorithm
console.log(" \n 2...................")

    Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
}
describe("InheritanceMochaTesting", function() {
    it("Bubble Sort", function () {
        assert.equal([6, 4, 0, 3, -2, 1].bubbleSort().toString(), '-2,0,1,3,4,6' );
    });
});

//3...function Constructor
console.log("\n 3...............using function Constructor...............")
 function Person(name) {
  this.name = name;
};
const teacher = new Person("Dr. Keith Levi");
Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
}
console.log(teacher.teach(" WAP"));

// Object.Create
console.log("\n ........Using Object Prototype Aproach...................")

const person = function () {
    return {name: "Paul"};
};
const teach = Object.create(person());
teach.name = "Dr. Keith Levi";
teach.course = function (subject) {
    return this.name + " is now teaching " + subject
};

    describe("InheritanceMochaTesting", function() {
        it("Teacher", function () {
            assert.equal(teach.course("WAP"), "Dr. Keith Levi is now teaching WAP");
        });
    });

})();