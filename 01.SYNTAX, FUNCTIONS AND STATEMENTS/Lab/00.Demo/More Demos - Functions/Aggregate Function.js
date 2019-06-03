//JSDOC
/**
 * 
 * @param {Array} arr 
 * @param {Number} accumolator 
 * @param {Function} operator 
 */
function aggregate (arr, accumolator, operator) {
    for(let i = 0; i < arr.length; i++) {
        accumolator = operator(accumolator, arr[i]);
    }    

    return accumolator;
}

console.log(aggregate([1, 2, 3, 4], 10, (a, b) => a + b));