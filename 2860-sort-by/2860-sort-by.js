/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b)); 
};

// If fn(a) is less than fn(b), then the function will return a negative value and a will go before b. If fn(a) is greater than fn(b), the function will return a positive value, and a will go after b.