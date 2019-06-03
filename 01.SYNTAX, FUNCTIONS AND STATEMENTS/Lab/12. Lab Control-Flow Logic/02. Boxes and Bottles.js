/**
 * 
 * @param {Number} bottles 
 * @param {Number} boxCapacity 
 */
function solve(bottles, boxCapacity) {
    return Math.ceil(bottles / boxCapacity);
}

console.log(solve(15, 7));