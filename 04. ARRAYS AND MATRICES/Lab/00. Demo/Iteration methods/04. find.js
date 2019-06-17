//The find() method returns the value of the first element 
//in the array that satisfies the provided testing function. 
//Otherwise undefined is returned.

//arr.find(callback(element[, index[, array]])[, thisArg]) <-- Syntax
function demo() {
    let array1 = [5, 12, 8, 130, 44];

    let found = array1.find(function (element) {
        return element > 10;
    });

    console.log(found);
    // expected output: 12

    //Examples
    console.log('Examples');

    findObjectInArray();
    findObjectInArrayArrowFunction();
    findPrimeNumberInArray();
    nonExistentAndDeletedElementsAreVisited();
}
demo();

function findObjectInArray() {
    let inventory = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'cherries', quantity: 5 }
    ];

    function isCherries(fruit) {
        return fruit.name === 'cherries';
    }

    console.log(inventory.find(isCherries));
    // { name: 'cherries', quantity: 5 }
}

function findObjectInArrayArrowFunction() {
    const inventory = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'cherries', quantity: 5 }
    ];

    const result = inventory.find(fruit => fruit.name === 'cherries');

    console.log(result) // { name: 'cherries', quantity: 5 }
}

function findPrimeNumberInArray() {
    function isPrime(element, index, array) {
        var start = 2;
        while (start <= Math.sqrt(element)) {
            if (element % start++ < 1) {
                return false;
            }
        }
        return element > 1;
    }

    console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
    console.log([4, 5, 8, 12].find(isPrime)); // 5
}

function nonExistentAndDeletedElementsAreVisited() {
    // Declare array with no element at index 2, 3 and 4
    let array = [0, 1, , , , 5, 6];

    // Shows all indexes, not just those that have been assigned values
    array.find(function (value, index) {
        console.log('Visited index ' + index + ' with value ' + value);
    });

    // Shows all indexes, including deleted
    array.find(function (value, index) {

        // Delete element 5 on first iteration
        if (index == 0) {
            console.log('Deleting array[5] with value ' + array[5]);
            delete array[5];
        }
        // Element 5 is still visited even though deleted
        console.log('Visited index ' + index + ' with value ' + value);
    });
    // expected output:
    // Deleting array[5] with value 5 
    // Visited index 0 with value 0 
    // Visited index 1 with value 1 
    // Visited index 2 with value undefined 
    // Visited index 3 with value undefined 
    // Visited index 4 with value undefined 
    // Visited index 5 with value undefined 
    // Visited index 6 with value 6
}