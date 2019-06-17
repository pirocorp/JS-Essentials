//The filter() method creates a new array with all elements 
//that pass the test implemented by the provided function.

//filter() does not mutate the array on which it is called.

//let newArray = arr.filter(callback(element[, index[, array]])[, thisArg]) <-- Syntax
function demo() {
    let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

    filteringOutAllSmallValues();
    filteringInvalidEntriesJSON();
    searchingArray();
}
demo();

//The following example uses filter() to create a filtered array that 
//has all elements with values less than 10 removed.
function filteringOutAllSmallValues() {
    function isBigEnough(value) {
        return value >= 10;
    }

    let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtered is [12, 130, 44]
    console.log(filtered);
}

//The following example uses filter() to create a filtered json of 
//all elements with non-zero, numeric id.
function filteringInvalidEntriesJSON() {
    let arr = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { id: 12.2 },
        {},
        { id: null },
        { id: NaN },
        { id: 'undefined' }
    ];

    let invalidEntries = 0;

    function isNumber(obj) {
        return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj);
    }

    function filterByID(item) {
        if (isNumber(item.id) && item.id !== 0) {
            return true;
        }
        invalidEntries++;
        return false;
    }

    let arrByID = arr.filter(filterByID);

    console.log('Filtered Array\n', arrByID);
    // Filtered Array
    // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

    console.log('Number of Invalid Entries = ', invalidEntries);
    // Number of Invalid Entries = 5
}

function searchingArray() {
    let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    /**
     * Filter array items based on search criteria (query)
     */
    function filterItems(arr, query) {
        return arr.filter(function (el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
    }

    console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
    console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
}