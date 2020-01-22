(function() {

    function deepEqual(left, right) {
        if (Object.keys(left).length !== Object.keys(right).length)
            return false;

        if (typeof (left) !== typeof (right))
            return false;

        if (typeof (left) === "object") {
            for ( let key in left) {
                return deepEqual(left[key], right[key]);
            }
        } else {
            if (left === right)
                return true;
            else
                return false;
        }
    }

    let obj = {
                 here : {
                 is : "an"
                   },
                 object : 2
              };
    console.log(deepEqual(obj, obj));
    console.log(deepEqual(obj, {
        here : 1,
        object : 2
    }));
    console.log(deepEqual(obj, {
                                here : {
                                is : "an"
                                   },
                                object : 2
                                }));
}());