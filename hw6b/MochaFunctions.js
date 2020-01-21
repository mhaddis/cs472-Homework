/*jshint esversion: 6 */
(function (){
    'use strict'
    function maxOfTwo(num1, num2)
    {
    if (num1>num2){
        return num1;
    }
    else {return num2;}
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
    } else {
        if (num2 > num3) {
            return num2;
        } else {
            return num3;
        }
    }
}

function isVowel(char){
    let str = char.toLowerCase();
    let vowels = (['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i <= vowels.length; i++){
        if (str === vowels[i]) {
            return true;
        }
    }
    return false;
}

function sumNum(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

function productNum(numbers){
    let pro=1;
    for(let i=0; i<numbers.length; i++){
        pro*=numbers[i];
    }
    return pro;
}

function reverse(str) {
    let revStr='';
    for (let i=str.length-1; i>=0;i--){
        revStr+=str[i];
    }
    return revStr;
}

function findLongestWord(str) {
    let longestWord = str.reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
}

function filterLongWords(str, num) {
    for (let i=0; i<str.length;i++){
        if(str[i].length>num) {
            return str[i];
        }
    }
}

describe("MochaFunctions", function() {
    it("maxNumber is 15", function () {
        assert.equal(maxOfTwo(15, 10), 15);
    });
    it("maxNumber is 15", function () {
        assert.equal(maxOfThree(15, 10, 5), 15);
    });
    it("isVowel(S) is false", function () {
        assert.equal(isVowel('s'), false);
    });
    it("sum for numbers(1,2,3,4) is 10", function () {
        assert.equal(sumNum([1, 2, 3, 4]), 10);
    });
    it("product for numbers(1,2,3,4)  is 24", function () {
        assert.equal(productNum([1, 2, 3, 4]), 24);
    });
    it("reverse str(Hello) is olleH", function () {
        assert.equal(reverse("Hello"), "olleH");
    });
    it("output of findLongestWord(Hello,Hi,Hey) is 5", function () {
        assert.equal(findLongestWord(["Hello", "Hi", "Hey"]), 5);
    });
    it("LongestWord is Hello", function () {
        assert.equal(filterLongWords(["Hello", "Hi", "Hey"],3), "Hello");
    });
});
}());