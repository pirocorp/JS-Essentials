/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let k = Number(arr[0]);
    arr.shift();

    let firstKElements = arr.slice(0, k);
    let lastKElements = arr.slice(-k);

    console.log(firstKElements);
    console.log(lastKElements);
}
solve([3, 6, 7, 8, 9]);