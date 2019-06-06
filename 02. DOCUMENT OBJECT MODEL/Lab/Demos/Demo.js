/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        let currentCity = arr[i];
        let income = Number(arr[i + 1]);

        if(!result[currentCity]) {
            result[currentCity] = 0;
        }
        
        result[currentCity] += income;
    }

    console.log(JSON.stringify(result));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
