//The shift() method removes the first element from an array 
//and returns that removed element. This method changes the 
//length of the array.

//The shift method removes the element at the zeroeth index 
//and shifts the values at consecutive indexes down, then returns 
//the removed value. If the length property is 0, undefined is returned.



//arr.shift() <-- Syntax
function demo() {
    let array1 = [1, 2, 3];

    let firstElement = array1.shift();

    console.log(array1);
    // expected output: Array [2, 3]

    console.log(firstElement);
    // expected output: 1

    removingAnElementFromAnArray();
    usingShiftInWhileLoop();
}
demo();

//The following code displays the myFish array before and after removing
//its first element. It also displays the removed element:
function removingAnElementFromAnArray() {
    let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

    console.log('myFish before:', JSON.stringify(myFish));
    // myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

    let shifted = myFish.shift();

    console.log('myFish after:', myFish);
    // myFish after: ['clown', 'mandarin', 'surgeon']

    console.log('Removed this element:', shifted);
    // Removed this element: angel
}

//The shift() method is often used in condition inside while loop. 
//In the following example every iteration will remove the next 
//element from an array, until it is empty:
function usingShiftInWhileLoop() {
    let names = ["Andrew", "Edward", "Paul", "Chris", "John"];

    while ((i = names.shift()) !== undefined) {
        console.log(i);
    }
    // Andrew, Edward, Paul, Chris, John
}