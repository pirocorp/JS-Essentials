//The initial value of the @@iterator property is the same 
//function object as the initial value of the values() property.

//arr[Symbol.iterator]() <-- Syntax
function demo() {
    iterationUsingForOfLoop();
    alternativeIteration();
}
demo();

function iterationUsingForOfLoop() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let eArr = arr[Symbol.iterator]();
    // your browser must support for..of loop
    // and let-scoped variables in for loops
    // const and var could also be used
    for (let letter of eArr) {
        console.log(letter);
    }
}

function alternativeIteration() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let eArr = arr[Symbol.iterator]();

    console.log(eArr.next().value); // a
    console.log(eArr.next().value); // b
    console.log(eArr.next().value); // c
    console.log(eArr.next().value); // d
    console.log(eArr.next().value); // e
}