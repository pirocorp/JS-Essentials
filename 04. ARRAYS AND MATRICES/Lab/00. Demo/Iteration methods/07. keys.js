//The keys() method returns a new Array Iterator object that contains 
//the keys for each index in the array.

//arr.keys() <-- Syntax
function demo() {
    var array1 = ['a', 'b', 'c'];
    var iterator = array1.keys();

    for (let key of iterator) {
        console.log(key); // expected output: 0 1 2
    }

    //Examples
    keyIteratorNotIgnoreHoles();
}
demo();

function keyIteratorNotIgnoreHoles() {
    let arr = ['a', , 'c'];
    let sparseKeys = Object.keys(arr);
    let denseKeys = [...arr.keys()];
    console.log(sparseKeys); // ['0', '2']
    console.log(denseKeys);  // [0, 1, 2]
}