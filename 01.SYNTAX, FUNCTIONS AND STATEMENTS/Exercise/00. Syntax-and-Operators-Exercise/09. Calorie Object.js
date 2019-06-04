/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let propName = arr[i];
        let propValue = arr[i + 1];
        obj[propName] = propValue;
    }

    console.log(obj);
}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);