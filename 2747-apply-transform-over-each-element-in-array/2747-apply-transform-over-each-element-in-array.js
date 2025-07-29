/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

//interesting approach: (using 32 bit integer array)
// var map = function(arr, fn) {
//     const newArr = new Int32Array(arr.length);
//     for (let i = 0; i < arr.length; ++i) {
//         newArr[i] = fn(arr[i], i);
//     }
//     return newArr;
// };