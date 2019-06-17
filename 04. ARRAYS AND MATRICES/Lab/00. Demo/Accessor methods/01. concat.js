//The concat() method is used to merge two or more arrays. 
//This method does not change the existing arrays, 
//but instead returns a new array.

//var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]]) <-- Syntax
function demo() {
    let array1 = ['a', 'b', 'c'];
    let array2 = ['d', 'e', 'f'];

    console.log(array1.concat(array2));
    // expected output: Array ["a", "b", "c", "d", "e", "f"]

    //Examples
    concatenatingTwoArrays();
    concatenatingThreeArrays();
    concatenatingValuesToAnArray();
    concatenatingNestedArrays();
}
demo();

function concatenatingTwoArrays() {
    const letters = ['a', 'b', 'c'];
    const numbers = [1, 2, 3];

    let result = letters.concat(numbers);
    console.log(result);
    // result in ['a', 'b', 'c', 1, 2, 3]
}

function concatenatingThreeArrays() {
    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [7, 8, 9];

    const numbers = num1.concat(num2, num3);

    console.log(numbers);
    // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

function concatenatingValuesToAnArray() {
    const letters = ['a', 'b', 'c'];

    const alphaNumeric = letters.concat(1, [2, 3]);

    console.log(alphaNumeric);
    // results in ['a', 'b', 'c', 1, 2, 3]
}

//The following code concatenates nested arrays and demonstrates retention of references:
function concatenatingNestedArrays() {
    const num1 = [[1]];
    const num2 = [2, [3]];

    const numbers = num1.concat(num2);

    console.log(numbers);
    // results in [[1], 2, [3]]

    // modify the first element of num1
    num1[0].push(4);

    console.log(numbers);
    // results in [[1, 4], 2, [3]]
}