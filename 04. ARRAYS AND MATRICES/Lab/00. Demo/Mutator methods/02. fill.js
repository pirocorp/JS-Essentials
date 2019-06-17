//The fill() method fills (modifies) all the elements 
//of an array from a start index (default zero) 
//to an end index (default array length) with a static 
//value. It returns the modified array.

//If start is negative, it is treated as length+start where length 
//is the length of the array. If end is negative, 
//it is treated as length+end.

//arr.fill(value[, start[, end]]) <-- Syntax

function demo(){
    let array1 = [1, 2, 3, 4];

    // fill with 0 from position 2 until position 4
    console.log(array1.fill(0, 2, 4));
    // expected output: [1, 2, 0, 0]

    // fill with 5 from position 1
    console.log(array1.fill(5, 1));
    // expected output: [1, 5, 5, 5]

    console.log(array1.fill(6));
    // expected output: [6, 6, 6, 6]

    //Examples
    console.log('Examples');

    console.log([1, 2, 3].fill(4)); 
    // [4, 4, 4]

    console.log([1, 2, 3].fill(4, 1)); 
    // [1, 4, 4]

    console.log([1, 2, 3].fill(4, 1, 2)); 
    // [1, 4, 3]

    console.log([1, 2, 3].fill(4, 1, 1)); 
    // [1, 2, 3]

    console.log([1, 2, 3].fill(4, 3, 3)); 
    // [1, 2, 3]

    console.log([1, 2, 3].fill(4, -3, -2)); 
    // [4, 2, 3]

    console.log([1, 2, 3].fill(4, NaN, NaN)); 
    // [1, 2, 3]

    console.log([1, 2, 3].fill(4, 3, 5)); 
    // [1, 2, 3]

    console.log(Array(3).fill(4)); 
    // [4, 4, 4]

    console.log([].fill.call({ length: 3 }, 4)); 
    // {0: 4, 1: 4, 2: 4, length: 3}    
}
demo();