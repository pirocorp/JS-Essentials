function solve(arr) {
    let currentMax = arr.shift();
    let result = [];
    result.push(currentMax);

    let iterations = arr.length;
    
    for (let i = 0; i < iterations; i++) {
        let currentElement = arr.shift();
        
        if(currentElement >= currentMax) {
            result.push(currentElement);
            currentMax = currentElement;
        }
    }

    console.log(result.join('\n'));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);