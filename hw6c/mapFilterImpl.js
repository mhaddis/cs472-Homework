
function map(arr, mapFunc){
    const mapArr = []; // empty array
    for(let i=0;i<arr.length;i++) {         // loop through array
        const result = mapFunc(arr[i], i, arr);
        mapArr.push(result);
    }
    return mapArr;
}
let arr = [1, 2, 3, 4, 5];
squareArr = arr.map(num => num ** 2);
console.log(squareArr); // prints [1, 4, 9, 16, 25]

function filter(arr, filterFunc) {
    const filterArr = []; // empty array
    for(let i=0;i<arr.length;i++) {         // loop through array
        const result = filterFunc(arr[i], i, arr);
        // push the current element if result is true
    if(result)
        filterArr.push(arr[i]);
    }
    return filterArr;
}
oddArr = arr.filter(num => num % 2 === 0);
console.log(oddArr); // prints [2, 4]