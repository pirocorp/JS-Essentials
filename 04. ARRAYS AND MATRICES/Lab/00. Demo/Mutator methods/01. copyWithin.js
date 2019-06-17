//Mutator methods modify the array
//The copyWithin() method shallow copies part of an array to another 
//location in the same array and returns it without modifying its length.

//arr.copyWithin(target[, start[, end]]) <-- Syntax
function demo() {
    let array1 = ['a', 'b', 'c', 'd', 'e'];

    console.log(array1.copyWithin(0, 3, 4)); // copy to index 0 the element at index 3
    //returns: The modified array
    // expected output: Array ["d", "b", "c", "d", "e"] 

    array1 = ['a', 'b', 'c', 'd', 'e'];    
    console.log(array1.copyWithin(1, 3)); // copy to index 1 all elements from index 3 to the end
    // expected output: Array ["a", "d", "e", "d", "e"]

    //Examples
    console.log('Examples');
    console.log([1, 2, 3, 4, 5].copyWithin(-2));
    // [1, 2, 3, 1, 2]

    console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
    // [4, 5, 3, 4, 5]

    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
    // [4, 2, 3, 4, 5]

    console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
    // [1, 2, 3, 3, 4]

    console.log([].copyWithin.call({ length: 5, 3: 1 }, 0, 3));
    // {0: 1, 3: 1, length: 5}

    // ES2015 Typed Arrays are subclasses of Array
    var i32a = new Int32Array([1, 2, 3, 4, 5]);

    i32a.copyWithin(0, 2);
    // Int32Array [3, 4, 5, 4, 5]
    console.log(i32a);

    // On platforms that are not yet ES2015 compliant: 
    console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));
    // Int32Array [4, 2, 3, 4, 5]
}
demo();