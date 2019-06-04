/**
 * 
 * @param {Number} n 
 * @param {Number} m 
 */
function solve(n, m) {
    let maxValue = Math.max(n, m);
    let minValue = Math.min(n, m);

    for (let i = minValue; i > 0; i--) {
        if(maxValue % i === 0 && minValue % i === 0) {
            console.log(i);
            return
        }
    }
}

solve(2154, 458);