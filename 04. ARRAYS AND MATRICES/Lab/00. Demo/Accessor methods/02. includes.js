//The includes() method determines whether an array includes a
//certain value among its entries, returning true or false as appropriate.

//When comparing strings and characters, includes() is case-sensitive.

//arr.includes(valueToFind[, fromIndex]) <-- Syntax
function demo() {
    let array1 = [1, 2, 3];

    console.log(array1.includes(2));
    // expected output: true

    let pets = ['cat', 'dog', 'bat'];

    console.log(pets.includes('cat'));
    // expected output: true

    console.log(pets.includes('at'));
    // expected output: false

    //Examples
    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    [1, 2, 3].includes(3, 3);  // false
    [1, 2, 3].includes(3, -1); // true
    [1, 2, NaN].includes(NaN); // true
}
demo();

//Includes called on array-like object
(function () {
    console.log('IIFE');
    console.log([].includes.call(arguments, 'a')); // true
    console.log([].includes.call(arguments, 'd')); // false
})('a', 'b', 'c');
