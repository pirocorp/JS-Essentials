//The lastIndexOf() method returns the last index at which a 
//given element can be found in the array, or -1 if it is not present. 
//The array is searched backwards, starting at fromIndex.

//The last index of the element in the array; -1 if not found.

//lastIndexOf compares searchElement to elements of the Array using 
//strict equality (the same method used by the ===, or triple-equals, operator).

//arr.lastIndexOf(searchElement[, fromIndex]) <-- Syntax
function demo() {
    let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    console.log(animals.lastIndexOf('Dodo'));
    // expected output: 3

    console.log(animals.lastIndexOf('Tiger'));
    // expected output: 1

    //Examples
    console.log('Examples');
    usingLastIndexOf();
    findingAllOccurrences();
}
demo();

function usingLastIndexOf() {
    let numbers = [2, 5, 9, 2];
    console.log(numbers.lastIndexOf(2));     // 3
    console.log(numbers.lastIndexOf(7));     // -1
    console.log(numbers.lastIndexOf(2, 3));  // 3
    console.log(numbers.lastIndexOf(2, 2));  // 0
    console.log(numbers.lastIndexOf(2, -2)); // 0
    console.log(numbers.lastIndexOf(2, -1)); // 3
}

//The following example uses lastIndexOf to find all the indices of an 
//element in a given array, using push to add them to another array 
//as they are found.
function findingAllOccurrences() {
    let indices = [];
    let array = ['a', 'b', 'a', 'c', 'a', 'd'];
    let element = 'a';
    let idx = array.lastIndexOf(element);
    
    while (idx != -1) {
        indices.push(idx);
        idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
    }

    console.log(indices);
    // [4, 2, 0]
}