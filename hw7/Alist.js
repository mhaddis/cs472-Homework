(function() {
    "use strict";
    function arrayToList(arr) {
        let retVal = {
            rest : null
        };
     for (let i = 0; i < arr.length; i++) {
        if (retVal.rest === null) {
                retVal.value = arr[i];
                retVal.rest = {
                    rest : null
                };
        } else {
                let counter = retVal;
                while (counter.rest !== null) {
                    counter = counter.rest;
                }
                counter.value = arr[i];
                counter.rest = {

                    rest : null
                };
            }
        }
        return retVal;
    }
    console.log(arrayToList([ 1, 2, 3 ]));

    function listToArray(list) {
        let arr = [];
        while (list !== null) {
            if (list.value !== undefined)
                arr.push(list.value);
            list = list.rest;
        }
        return arr;
    }
    console.log(listToArray({
                             value : 1,
                             rest : {
                               value : 2,
                               rest : {
                               value : 3,
                               rest : null
                               }
                             }
                        }))

    console.log(listToArray(arrayToList([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ])));

    function prepend(element, list) {
        return {
            value : element,
            rest : list
        };
    }
    console.log(prepend(10, prepend(20, null)));

    function nth(list, index) {
        return listToArray(list)[index];
    }

    function nthNextMethod(list, index) {
        while (list !== null) {
            if (list.value !== undefined) {
                if (index-- === 0) {
                    return list.value;
                }
            }
            list = list.rest;
        }
    }

    function recursiveNth(list, index) {
        if (index === 0)
            return list.value;
        return recursiveNth(list.rest, --index);
    }
    console.log(recursiveNth(arrayToList([ 10, 20, 30 ]), 1));
    console.log(nth(arrayToList([ 10, 20, 30 ]), 1));
    console.log(nthNextMethod(arrayToList([ 10, 20, 30 ]), 1));
}());