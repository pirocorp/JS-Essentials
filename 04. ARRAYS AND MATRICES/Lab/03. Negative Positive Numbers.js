function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        
        if(currentElement < 0) {
            result.unshift(currentElement)
        } else {
            result.push(currentElement);
        }
    }

    result = result.join('\n');
    console.log(result);
}
solve([7, -2, 8, 9]);