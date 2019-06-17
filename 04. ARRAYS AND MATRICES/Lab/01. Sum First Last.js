/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let numbers = arr.map(Number);
    let result = numbers[0] + numbers[numbers.length - 1];
    console.log(result);
    /* return result; */
}
solve(['20', '30', '40']);