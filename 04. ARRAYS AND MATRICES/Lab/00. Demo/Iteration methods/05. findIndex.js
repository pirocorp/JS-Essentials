//The findIndex() method returns the index of the first element 
//in the array that satisfies the provided testing function. 
//Otherwise, it returns -1, indicating that no element passed the test.

//arr.findIndex(callback(element[, index[, array]])[, thisArg]) <-- Syntax
function demo() {
    let array1 = [5, 12, 8, 130, 44];

    function isLargeNumber(element) {
        return element > 13;
    }

    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3

    findIndexOfPrimeNumber();
    findIndexUsingArrowFunction();
}
demo();

function findIndexOfPrimeNumber() {
    function isPrime(element, index, array) {
        let start = 2;
        while (start <= Math.sqrt(element)) {
            if (element % start < 1) {
                return false;
            } else {
                start++;
            }
        }
        return element > 2;
    }

    console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
    console.log([4, 6, 7, 12].findIndex(isPrime)); // 2 (array[2] is 7)
}

function findIndexUsingArrowFunction() {
    let fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
    let index = fruits.findIndex(fruit => fruit === "blueberries");

    console.log(index); // 3
    console.log(fruits[index]); // blueberries
}