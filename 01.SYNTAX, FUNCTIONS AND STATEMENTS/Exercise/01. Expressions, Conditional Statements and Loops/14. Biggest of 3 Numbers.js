/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let numbers = arr.map(x => +x);
    numbers = numbers.sort(comparator);

    let max = numbers[0];    

    console.log(max);

    function comparator(a, b) {
        return b - a;
    }
}

solve([130, 5, 99]);