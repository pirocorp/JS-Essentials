//The reverse() method reverses an array in place. 
//The first array element becomes the last, and the 
//last array element becomes the first.

//The reverse method transposes the elements of the calling array object in place, 
//mutating the array, and returning a reference to the array.

//a.reverse() <-- Syntax
function demo() {
    let array1 = ['one', 'two', 'three'];
    console.log('array1: ', array1);
    // expected output: Array ['one', 'two', 'three']

    let reversed = array1.reverse();
    console.log('reversed: ', reversed);
    // expected output: Array ['three', 'two', 'one']

    /* Careful: reverse is destructive. It also changes
    the original array */
    console.log('array1: ', array1);
    // expected output: Array ['three', 'two', 'one']

    reversingTheElementsInAnArray();
}
demo()

//The following example creates an array a, containing three elements, 
//then reverses the array. The call to reverse() returns a 
//reference to the reversed array a.
function reversingTheElementsInAnArray() {
    const a = [1, 2, 3];

    console.log(a); // [1, 2, 3]

    a.reverse();

    console.log(a); // [3, 2, 1]
}

//The following example creates an array-like object a, containing three 
//elements and a length property, then reverses the array-like object. 
//The call to reverse() returns a reference to the reversed array-like object a.
function reversingTheElementsInAnArrayLikeObject() {
    const a = { 0: 1, 1: 2, 2: 3, length: 3 };

    console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

    Array.prototype.reverse.call(a); //same syntax for using apply()

    console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}
}