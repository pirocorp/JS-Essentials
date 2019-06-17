//The some() method tests whether at least one element in the array 
//passes the test implemented by the provided function. 
//It returns a Boolean value.

//arr.some(callback(element[, index[, array]])[, thisArg]) <-- Syntax
function demo() {
    let array = [1, 2, 3, 4, 5];

    let even = function (element) {
        // checks whether an element is even
        return element % 2 === 0;
    };

    console.log(array.some(even));
    // expected output: true

    //Example
    console.log('---Example---');
    testingValueOfArrayElements();
    testingValueOfArrayElementsUsingArrowFunctions();
    checkingWhetherValueExistsInArray();
    checkingWhetherValueExistsUsingArrowFunction();
    convertingValueToBoolean();
}
demo();

function testingValueOfArrayElements() {
    function isBiggerThan10(element, index, array) {
        return element > 10;
    }

    console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
    console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true
}

function testingValueOfArrayElementsUsingArrowFunctions() {
    console.log([2, 5, 8, 1, 4].some(x => x > 10));  // false
    console.log([12, 5, 8, 1, 4].some(x => x > 10)); // true
}

//To mimic the function of the includes() method, this custom function 
//returns true if the element exists in the array
function checkingWhetherValueExistsInArray() {
    let fruits = ['apple', 'banana', 'mango', 'guava'];

    function checkAvailability(arr, val) {
        return arr.some(function (arrVal) {
            return val === arrVal;
        });
    }

    console.log(checkAvailability(fruits, 'kela'));   // false
    console.log(checkAvailability(fruits, 'banana')); // true
}

function checkingWhetherValueExistsUsingArrowFunction() {
    let fruits = ['apple', 'banana', 'mango', 'guava'];

    function checkAvailability(arr, val) {
        return arr.some(arrVal => val === arrVal);
    }

    console.log(checkAvailability(fruits, 'kela'));   // false
    console.log(checkAvailability(fruits, 'banana')); // true
}

function convertingValueToBoolean() {
    let TRUTHY_VALUES = [true, 'true', 1];

    function getBoolean(value) {
        'use strict';

        if (typeof value === 'string') {
            value = value.toLowerCase().trim();
        }

        return TRUTHY_VALUES.some(function (t) {
            return t === value;
        });
    }

    console.log(getBoolean(false));   // false
    console.log(getBoolean('false')); // false
    console.log(getBoolean(1));       // true
    console.log(getBoolean('true'));  // true
}