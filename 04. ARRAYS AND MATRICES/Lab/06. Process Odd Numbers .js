/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let result = arr
        .filter((x, i) => i % 2 === 1)
        .reverse()
        .map(x => x * 2);

    console.log(result);
}
solve([10, 15, 20, 25]);