//The splice() method changes the contents of an array by removing or replacing 
//existing elements and/or adding new elements in place.

//If the specified number of elements to insert differs from the number of elements 
//being removed, the array's length will be different at the end of the call. 

//Returns An array containing the deleted elements. If only one element is removed, 
//an array of one element is returned. If no elements are removed, an empty array is returned.

//var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) <-- Syntax
function demo() {
    let months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // inserts at index 1
    console.log(months);
    // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    console.log(months);
    // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

    //Examples
    removeZeroElementsAndInsertOne();
    removeZeroElementsAndInsertTwo();
    removeOneElement();
    removeOneElementAndInsertOne();
    removeTwoElementAndInsertThree();
    removeTwoElement();
    removeOneElementFromNegativeIndex();
    removeAllElementsAfterIndex();
}
demo();

function removeZeroElementsAndInsertOne() {
    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    let removed = myFish.splice(2, 0, 'drum');

    console.log(myFish);
    console.log(removed);

    // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
    // removed is [], no elements removed
}

function removeZeroElementsAndInsertTwo() {
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    var removed = myFish.splice(2, 0, 'drum', 'guitar');

    console.log(myFish);
    console.log(removed);

    // myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"] 
    // removed is [], no elements removed
}

function removeOneElement() {
    var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
    var removed = myFish.splice(3, 1);

    console.log(myFish);
    console.log(removed);

    // myFish is ["angel", "clown", "drum", "sturgeon"]
    // removed is ["mandarin"]
}

function removeOneElementAndInsertOne() {
    var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
    var removed = myFish.splice(2, 1, 'trumpet');

    console.log(myFish);
    console.log(removed);

    // myFish is ["angel", "clown", "trumpet", "sturgeon"]
    // removed is ["drum"]
}

function removeTwoElementAndInsertThree() {
    var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
    var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

    console.log(myFish);
    console.log(removed);

    // myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
    // removed is ["angel", "clown"]
}

function removeTwoElement() {
    var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
    var removed = myFish.splice(myFish.length - 3, 2);

    console.log(myFish);
    console.log(removed);

    // myFish is ["parrot", "anemone", "sturgeon"] 
    // removed is ["blue", "trumpet"]
}

function removeOneElementFromNegativeIndex() {
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    var removed = myFish.splice(-2, 1);

    console.log(myFish);
    console.log(removed);

    // myFish is ["angel", "clown", "sturgeon"] 
    // removed is ["mandarin"]
}

function removeAllElementsAfterIndex() {
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    var removed = myFish.splice(2);

    console.log(myFish);
    console.log(removed);

    // myFish is ["angel", "clown"] 
    // removed is ["mandarin", "sturgeon"]
}