/**
 * 
 * @param {Array} arr 
 */
function solve(arr){
    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        let propName = arr[i];
        let propValue = arr[i + 1];

        result[propName] = propValue;
    }

    console.log(result);
}

solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);