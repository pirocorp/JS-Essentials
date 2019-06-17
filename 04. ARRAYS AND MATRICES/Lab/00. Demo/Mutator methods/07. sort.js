//The sort() method sorts the elements of an array in place and returns the sorted array. 
//The default sort order is built upon converting the elements into strings, 
//then comparing their sequences of UTF-16 code units values.

//arr.sort([compareFunction]) <-- Syntax
function demo() {
    let months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]

    let array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
    // expected output: Array [1, 100000, 21, 30, 4]

    functionExpressions();
    arrowFunctionExpressions();
    passingFunction();
    sortingObject();
    creatingDisplayingSorting();
    sortingNonASCIICharacters();
    sortingWithMap();
}
demo();

function functionExpressions() {
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort(function (a, b) {
        return a - b;
    });

    console.log(numbers);
    // [1, 2, 3, 4, 5]
}

function arrowFunctionExpressions() {
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
    // [1, 2, 3, 4, 5]
}

function passingFunction() {
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort(compareNumbers);
    console.log(numbers);
    // [1, 2, 3, 4, 5]
}

//To compare numbers instead of strings, the compare function can simply subtract b from a. 
//The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):
function compareNumbers(a, b) {
    return a - b;
}

//Objects can be sorted, given the value of one of their properties.
function sortingObject() {
    let items = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
    ];

    // sort by value
    items.sort(function (a, b) {
        return a.value - b.value;
    });

    console.log(items);

    // sort by name
    items.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    console.log(items);
}

//The following example creates four arrays and displays the original array, 
//then the sorted arrays. The numeric arrays are sorted without a compare 
//function, then sorted using one.
function creatingDisplayingSorting() {
    var stringArray = ['Blue', 'Humpback', 'Beluga'];
    var numericStringArray = ['80', '9', '700'];
    var numberArray = [40, 1, 5, 200];
    var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

    function compareNumbers(a, b) {
        return a - b;
    }

    console.log('stringArray:', stringArray.join());
    //stringArray: Blue,Humpback,Beluga
    console.log('Sorted:', stringArray.sort());
    //Sorted: Beluga,Blue,Humpback

    console.log('numberArray:', numberArray.join());
    //numberArray: 40,1,5,200
    console.log('Sorted without a compare function:', numberArray.sort());
    //Sorted without a compare function: 1,200,40,5
    console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));
    //Sorted with compareNumbers: 1,5,40,200

    console.log('numericStringArray:', numericStringArray.join());
    //numericStringArray: 80,9,700
    console.log('Sorted without a compare function:', numericStringArray.sort());
    //Sorted without a compare function: 700,80,9
    console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));
    //Sorted with compareNumbers: 9,80,700

    console.log('mixedNumericArray:', mixedNumericArray.join());
    //mixedNumericArray: 80,9,700,40,1,5,200
    console.log('Sorted without a compare function:', mixedNumericArray.sort());
    //Sorted without a compare function: 1,200,40,5,700,80,9
    console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
    //Sorted with compareNumbers: 1,5,9,40,80,200,700
}

//strings from languages other than English, use String.localeCompare. 
//This function can compare those characters so they appear in the right order.
function sortingNonASCIICharacters() {
    let items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
    items.sort(function (a, b) {
        return a.localeCompare(b);
    });

    console.log(items);
    // items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
}

//The compareFunction can be invoked multiple times per element within the array. 
//Depending on the compareFunction's nature, this may yield a high overhead. 
//The more work a compareFunction does and the more elements there are to sort, 
//it may be more efficient to use map for sorting. The idea is to traverse the 
//array once to extract the actual values used for sorting into a temporary array, 
//sort the temporary array, and then traverse the temporary array to achieve the right order.
function sortingWithMap() {
    // the array to be sorted
    let list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

    // temporary array holds objects with position and sort-value
    let mapped = list.map(function (el, i) {
        return { index: i, value: el.toLowerCase() };
    })

    // sorting the mapped array containing the reduced values
    mapped.sort(function (a, b) {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    });

    // container for the resulting order
    let result = mapped.map(function (el) {
        return list[el.index];
    });
}