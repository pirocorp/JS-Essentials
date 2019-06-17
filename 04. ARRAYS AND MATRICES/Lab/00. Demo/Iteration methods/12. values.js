//The values() method returns a new Array Iterator object 
//that contains the values for each index in the array.

//arr.values() <-- Syntax
function demo() {
    let array1 = ['a', 'b', 'c'];
    let iterator = array1.values();

    for (let value of iterator) {
        console.log(value); // expected output: "a" "b" "c"
    }

    let a = ['a', 'b', 'c', 'd', 'e'];
    let iter = a.values();

    console.log(iter.next().value); // a
    console.log(iter.next().value); // b
    console.log(iter.next().value); // c
    console.log(iter.next().value); // d
    console.log(iter.next().value); // e

    //Examples
    console.log('---Examples---');
    iterationUsingForOfLoop();
}
demo();

function iterationUsingForOfLoop() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let iterator = arr.values();

    for (let letter of iterator) {
        console.log(letter);
    }
}