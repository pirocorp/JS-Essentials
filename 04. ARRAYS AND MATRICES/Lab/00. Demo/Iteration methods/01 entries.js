//The entries() method returns a new Array 
//Iterator object that contains the key/value pairs 
//for each index in the array.

//array.entries() <-- Syntax
function demo() {
    let array1 = ['a', 'b', 'c'];

    let iterator1 = array1.entries();

    console.log(iterator1.next().value);
    // expected output: Array [0, "a"]

    console.log(iterator1.next().value);
    // expected output: Array [1, "b"]

    console.log(iterator1.next().value);
    // expected output: Array [2, "c"]

    //Examples
    console.log('---');
    iteratingWithIndexAndElement();
    usingForOfLoop();
}
demo();

function iteratingWithIndexAndElement() {
    const a = ['a', 'b', 'c'];

    for (const [index, element] of a.entries())
        console.log(index, element);

    // 0 'a' 
    // 1 'b' 
    // 2 'c'
}

function usingForOfLoop() {
    let a = ['a', 'b', 'c'];
    let iterator = a.entries();

    for (let e of iterator) {
        console.log(e);
    }
    // [0, 'a']
    // [1, 'b']
    // [2, 'c']
}