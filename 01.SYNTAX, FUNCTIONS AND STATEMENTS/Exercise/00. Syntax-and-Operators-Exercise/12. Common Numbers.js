/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @param {Array} arr3 
 */
function solve(arr1, arr2, arr3) {
    let comonNumbers = [];

    let minArray = getMinArray(arr1, arr2, arr3);
    
    for (let i = 0; i < minArray.length; i++) {      
        let currentElement = minArray[i];

        if (arr1.includes(currentElement) && arr2.includes(currentElement) && arr3.includes(currentElement)) {
            comonNumbers.push(currentElement);
        }
    }

    comonNumbers = comonNumbers.sort();
    console.log(`The common elements are ${comonNumbers.join(", ")}.`);

    let sum = comonNumbers.reduce((a, b) => a + b);
    let avg = sum / comonNumbers.length;
    console.log(`Average: ${avg}.`);

    let median = getMedian(comonNumbers);
    console.log(`Median: ${median}.`)

    function getMedian(arr) {
        let middle = Math.floor(arr.length / 2);

        if(arr.length % 2 === 0) {
            return (arr[middle - 1] + arr[middle]) / 2;
        }

        return arr[middle];
    }

    function getMinArray(...arrays) {
        let minArray = arrays[0];

        for (let i = 1; i < arrays.length; i++) {
            let currentArray = arrays[i];
            
            if (currentArray.length < minArray.length) {
                minArray = currentArray;
            }
        }

        return minArray;
    }
}

solve([1, 2, 3, 4, 5],
    [3, 2, 1, 5, 8],
    [2, 5, 3, 1, 16]);