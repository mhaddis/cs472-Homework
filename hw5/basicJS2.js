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

function sumNum(numbers){
    const sum= (num1, num2)=>num1+num2;
    return numbers.reduce(sum);
}
console.log("Expected output of sum for numbers(1,2,3,4) is 10 " + myFunctionTest(10, sumNum([1,2,3,4])));

function productNum(numbers){
    const product=(num1, num2)=> num1*num2;
        return numbers.reduce(product);
}
console.log("Expected output of product for numbers(1,2,3,4)  is 24  " + myFunctionTest(24, productNum([1,2,3,4])));

function reverse(str) {
    return str.split("").reverse().join("");
}
console.log("Expected output of reverse str(Hello) is olleH  " + myFunctionTest('olleH', reverse('Hello')));

function filterLongWords(str, num) {
    return str.filter(function(str){return str.length>num;});
}
console.log("Expected output of findLongestWord(Hello,Hi,Hey) is Hello "
    + arrTest(["Hello","Hey"], filterLongWords(["Hello", "Hi", "Hey"], 2)));
