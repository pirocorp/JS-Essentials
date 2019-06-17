//The every() method tests whether all elements 
//in the array pass the test implemented by the 
//provided function. It returns a Boolean value.

//This method returns true for any condition put on an empty array.

//every does not mutate the array on which it is called.

//arr.every(callback(element[, index[, array]])[, thisArg]) <-- Syntax
function demo() {
    function isBelowThreshold(currentValue) {
        return currentValue < 40;
    }

    let array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // expected output: true

    //Examples
    console.log('Examples');
    testingSizeOfAllArrayElements(10);
    usingArrowFunctions(10);
}
demo();

//The following example tests whether all elements in
//the array are bigger than 10.
function testingSizeOfAllArrayElements(size) {
    function isBigEnough(element, index, array) {
        return element >= size;
    }

    console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
    console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
}

function usingArrowFunctions(size) {
    console.log('---Arrow functions---')
    console.log([12, 5, 8, 130, 44].every(x => x >= size));   // false
    console.log([12, 54, 18, 130, 44].every(x => x >= size)); // true
}