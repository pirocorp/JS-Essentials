/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let result = arr.sort((a, b) => a - b);
    result = result.slice(0, 2);

    console.log(result.join(' '));
}
solve([30, 15, 50, 5]);