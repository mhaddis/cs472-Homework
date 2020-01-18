function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
function arrTest(expected, found) {
    if (expected.length !== found.length) {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
    for (let i=0; i<expected.length;i++){
        if(expected[i]!==found[i])
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
    return "TEST SUCCEEDED";
}
function maxOfTwo(num1, num2){
    if (num1>num2) return num1;
    else return num2;
}
console.log("Expected output of maxOfTwo(15,10) is 15  " + myFunctionTest(15, maxOfTwo(15, 10)));

function maxOfThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) return num1;
    } else {
        if (num2 > num3) return num2;
        else
            return num3;
    }
}
console.log("Expected output of maxOfThree(15,10,5) is 15  " + myFunctionTest(15, maxOfThree(15, 10,5)));
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
console.log("Expected output of isVowel(S) is false  " + myFunctionTest(false, isVowel('s')));
function sumNum(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}
console.log("Expected output of sum for numbers(1,2,3,4) is 10 " + myFunctionTest(10, sumNum([1,2,3,4])));
function productNum(numbers){
    let pro=1;
    for(let i=0; i<numbers.length; i++){
        pro*=numbers[i];
    }
    return pro;
}
console.log("Expected output of product for numbers(1,2,3,4)  is 24  " + myFunctionTest(24, productNum([1,2,3,4])));
function reverse(str) {
    let revStr='';
    for (let i=str.length-1; i>=0;i--){
        revStr+=str[i];
    }
    return revStr;
}
console.log("Expected output of reverse str(Hello) is olleH  " + myFunctionTest('olleH', reverse('Hello')));

function findLongestWord(str) {
    let longestWord = str.reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
}
console.log("Expected output of findLongestWord(Hello,Hi,Hey) is 5  " + myFunctionTest(5, findLongestWord(["Hello", "Hi", "Hey)"])));
function filterLongWords(str, num) {
    for (let i=0; i<str.length;i++){
        if(str[i].length>num) return str[i];
    }
}
console.log("Expected output of findLongestWord(Hello,Hi,Hey) is Hello "
    + myFunctionTest("Hello", filterLongWords(["Hello", "Hi", "Hey)"], 3)));

const a = [1,3,5,3,3];

const multiplyBy10 = a.map(function(elem, i, array) {
    return elem*10;})
console.log("Expected output of multiplyBy10[1,3,5,3,3] is [10,30,50,30,30] " + arrTest([10,30,50,30,30], multiplyBy10));
const equalTo3 = a.filter(function(elem, i, array){
    return elem === 3;});
console.log("Expected output of equalTo3[1,3,5,3,3] is [3,3,3] " + arrTest([3,3,3], equalTo3));
const product = a.reduce(function(prevVal, elem, i, array){
    return prevVal*elem;});
console.log("Expected output of product[1,3,5,3,3] is 135 " + myFunctionTest(135, product));

